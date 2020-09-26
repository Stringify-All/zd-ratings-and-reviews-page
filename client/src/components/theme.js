import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a3d2ca',
      main: '#5eaaa8',
      dark: '#056676',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ece4db',
      main: '#a29b93',
      dark: '#a29b93',
      contrastText: '#000',
    },
    neutral: {
      main: '#a29b93',
      contrastText: '#000',
    },
  },
});

export default theme;
