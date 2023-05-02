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
      },
    }),
  },
  transitions: {
    custom: {
      colorMode: 'all .3s ease-out',
    },
  },
  typography: {
    h1: {
      fontSize: '1.8rem',
      [breakpoints.up('md')]: {
        fontSize: '2.4rem',
      },
      [breakpoints.up('lg')]: {
        fontSize: '3.5rem',
      },
    },
    h3: {
      fontSize: '1.3rem',
      [breakpoints.up('md')]: {
        fontSize: '1.4rem',
      },
      [breakpoints.up('lg')]: {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '1rem',
      [breakpoints.up('md')]: {
        fontSize: '1.2rem',
      },
      [breakpoints.up('lg')]: {
        fontSize: '1.4rem',
      },
    },
    p: {
      fontSize: '16px',
      // [breakpoints.up('md')]: {
      //   fontSize: '1.2rem',
      // },
      // [breakpoints.up('lg')]: {
      //   fontSize: '1.4rem',
      // },
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
