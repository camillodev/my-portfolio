'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ListItemText,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import theme from '../theme';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },

  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'About Me',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const pathname = usePathname();

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) =>
    (event: { type: string; key: string }) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(true)}
            className='mr-4'
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' className='font-bold cursor-pointer'>
          <Link href='/' className='text-inherit no-underline'>
            Rafael Camillo
          </Link>
        </Typography>
        <div className='ml-auto flex gap-4'>
          {isMobile ? ( // Renderizar o menu no Drawer para mobile
            <Drawer
              anchor='left'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                },
              }}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.title}
                    onClick={toggleDrawer(false)}
                    sx={{
                      fontWeight: 'bold',
                      color:
                        pathname === item.path
                          ? 'white'
                          : theme.palette.text.secondary,
                    }}
                  >
                    <Link href={item.path} className='w-full'>
                      <ListItemText primary={item.title} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          ) : (
            // Renderizar o menu na Toolbar para desktop
            menuItems.map((item) => (
              <div key={item.title}>
                <Link href={item.path}>
                  <Button
                    color='inherit'
                    sx={{
                      fontWeight: 'bold',
                      color:
                        pathname === item.path
                          ? 'white'
                          : theme.palette.text.secondary,
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              </div>
            ))
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
