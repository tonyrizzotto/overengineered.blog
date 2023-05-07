import { createTheme } from '@mui/material/node/styles/index.js';

const { breakpoints } = createTheme();

const makeTheme = ({ mode, shouldPlayTransition }) => createTheme({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        default: '#091A28',
        header: '#212429',
        accent: '#01933F',
        codeSnippet: '#0E2233',
      },
      text: {
        primary: '#d9d6db',
        primaryAccent: '#83C120',
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: '#fff',
        header: '#f3f5f7',
        accent: '#696969',
        codeSnippet: 'hsla(220, 6%, 87%, 0.90)',
      },
      text: {
        primary: '#3a3a3a',
        primaryAccent: '#83C120',
      },
    }),
  },
  transitions: {
    custom: {
      colorMode: 'all .3s ease-out',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    altFonts: {
      code: 'Source Code Pro, sans-serif',
    },
    h1: {
      fontSize: '6.9vw',
      [breakpoints.up('md')]: {
        fontSize: '5.9vw',
      },
      [breakpoints.up('md')]: {
        fontSize: '6.2vw',
      },
    },
    h3: {
      fontSize: '3.6vw',
      [breakpoints.up('md')]: {
        fontSize: '3.3vw',
      },
      [breakpoints.up('lg')]: {
        fontSize: '2.6vw',
      },
    },
    h4: {
      fontSize: '3.6vw',
      [breakpoints.up('md')]: {
        fontSize: '3vw',
      },
      [breakpoints.up('lg')]: {
        fontSize: '2.2vw',
      },
      [breakpoints.up('xl')]: {
        fontSize: '2vw',
      },
    },
    h6: {
      fontSize: '2.8vw',
      [breakpoints.up('md')]: {
        fontSize: '1.7vw',
      },
      [breakpoints.up('lg')]: {
        fontSize: '1.5vw',
      },
    },
    p: {
      fontSize: '16px',
    },
    caption: {
      fontSize: '16px',
      fontWeight: 900,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...(shouldPlayTransition && {
          body: {
            transition: 'background .3s ease-out, color .3s linear',
          },
        }),
      },
    },
  },
});

export default makeTheme;
