import { Box, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/node/styles/index.js';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../contexts/colorModeContext';

export default function MenuBar() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="right"
      alignItems="center"
      padding="1rem"
      fontSize="1.3rem"
    >
      <Link href="/" paddingRight="10px">Home</Link>
      <Link href="/blog" paddingRight="10px">Blog</Link>
      <Link href="/blog/2023-04-22">Latest</Link>
      <IconButton
        sx={{ ml: 5 }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme?.palette?.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
