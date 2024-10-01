import { createTheme } from '@mui/material/styles';

export const darkTheme= createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d0d0d0',
      light: '#ffffff',
      dark: '#969696',
    },
    secondary: {
      main: '#64c5f6',
      light: '#9BE7FF',
      contrastText: '#000000',
    },
    text: {
      secondary: '#B0BEC5',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    error: {
      main: '#D32F2F',
      light: '#FF6659',
      dark: '#9A0007',
    },
    warning: {
      main: '#FFA000',
      light: '#FFC046',
      dark: '#C67100',
      contrastText: '#000000',
    },
    info: {
      main: '#0288D1',
      light: '#5EB8FF',
      dark: '#005B9F',
    },
    success: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#00600F',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});