'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#FCBE30', // Yellow as primary color
    },
    secondary: {
      main: '#000000', // Black as secondary color
    },
    background: {
      default: '#000000', // Black background
      paper: '#171717', // Darker shade of black for paper surfaces
    },
    text: {
      primary: '#FCBE30', // Yellow primary text
      secondary: '#000000', // Lighter yellow for secondary text
    },
  },
  typography: {
    fontFamily: ['Heebo', 'Roboto', 'sans-serif'].join(','), // Use Heebo as primary font
  },
});

export default theme;