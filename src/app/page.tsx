'use client';

import { Divider } from '@mui/material';
import Banner from './components/Banner';
import LatestBlog from './components/LatestBlog';
import LatestProject from './components/LatestProjects';
import { useEffect, useState } from 'react';
import { client } from './utils/contentful';

export default function Home() {
  return (
    <div className='homezx'>
      <Banner />
      {/* <Divider
        variant='fullWidth'
        className='opacity-50'
        sx={{ bgcolor: '#f2f2f2', height: 1 }}
      /> */}
      <LatestBlog />
      {/* <Divider
        variant='fullWidth'
        className='opacity-50'
        sx={{ bgcolor: '#f2f2f2', height: 2 }}
      /> */}
      <LatestProject />
    </div>
  );
}
