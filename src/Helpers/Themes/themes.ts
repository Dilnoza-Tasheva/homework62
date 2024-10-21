import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7699b8',
      light: '#E6CFE6',
      dark: '#4da8c8',
      contrastText: '#fff',
    },
    background: {
      default: '#adc3e4',
      paper: '#ffffff',
    },
  },
});

export default theme;