import { createTheme } from '@mui/material/node/styles/index.js';

const makeTheme = ({ mode, shouldPlayTransition }) => createTheme({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        default: '#282c35',
        header: '#212429',
        codeSnippet: 'hsla(205, 95%, 17%, 0.55)',
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
