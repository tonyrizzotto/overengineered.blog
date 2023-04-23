import { createTheme } from '@mui/material';

const makeTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        codeSnippet: '#212429',
      },
    }),
    ...(mode === 'light' && {
      background: {
        codeSnippet: '#e3e4e6',
      },
    }),
  },
});

export default makeTheme;
