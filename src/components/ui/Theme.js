import { createMuiTheme } from '@material-ui/core/styles';

const black = '#000000';
const lightPink = '#FFB6C1';
const white = '#ffffff';
const grey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      black: `${black}`,
      lightPink: `${lightPink}`,
      white: `${white}`,
      grey: `${grey}`,
    },
    primary: {
      main: `${lightPink}`,
    },
    secondary: {
      main: `${white}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      color: `${black}`,
    },

    estimate: {
      fontFamily: 'pacifico',
      fontsize: '1rem',
      textTransform: 'none',
      fontWeight: 700,
      color: `${black}`,
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5em',
      color: `${black}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: black,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75em',
      color: black,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontweight: 300,
      color: grey,
    },
    subtitle2: {
      color: 'black',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
  },
  learnButton: {
    borderColor: black,
    color: black,
    borderWidth: 3,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});
