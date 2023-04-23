import { createTheme } from '@mui/material';

const makeTheme = (mode) => createTheme({
  palette: {
    mode,
  },
});

export default makeTheme;
