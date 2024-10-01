import { createTheme } from '@mui/material/styles';

export const lightTheme=createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1',
      light: '#5472D3',
      dark: '#002171',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1976D2',
      light: '#1976D2',
      dark: '#004BA0',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
    },
    warning: {
      main: '#FFA000',
      light: '#FFC046',
      dark: '#C67100',
      contrastText: '#000000',
    },
    success: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#00600F',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});