import { createTheme } from '@mui/material/node/styles/index.js';

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
    }),
    ...(mode === 'light' && {
      background: {
        default: '#f9fafb',
        header: '#f3f5f7',
        codeSnippet: 'hsla(220, 6%, 87%, 0.90)',
      },
    }),
  },
  transitions: {
    custom: {
      colorMode: 'background 0.3s linear',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...(shouldPlayTransition && {
          body: {
            transition: 'background 0.3s linear',
          },
        }),
      },
    },
  },
});

export default makeTheme;
