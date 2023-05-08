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
        codeSnippet: 'hsla(220, 6%, 87%, 0.90)',
      },
      text: {
        codeSnippet: '#3a3a3a',
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
        codeSnippet: '#3a3a3a',
        primary: '#3a3a3a',
        primaryAccent: '#83C120',
      },
    }),
  },
  custom: {
    ...(mode === 'light' && {
      shadows: {
        codeSnippet: '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
      },
    }),
    ...(mode === 'dark' && {
      shadows: {
        codeSnippet: 'none',
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
      fontSize: '4rem',
      [breakpoints.up('md')]: {
        fontSize: '6rem',
      },
    },
    h3: {
      fontSize: '2rem',
      [breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      [breakpoints.up('md')]: {
        fontSize: '1.7rem',
      },
      [breakpoints.up('lg')]: {
        fontSize: '2.2rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      [breakpoints.up('md')]: {
        fontSize: '1.6rem',
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
    MuiDialog: {
      defaultProps: {
        onClick: (e) => e.stopPropagation(),
        BackdropProps: {
          sx: {
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});

export default makeTheme;
