import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4caf50',
    },
    background: {
      default: '#303030',
    },
  },
});
