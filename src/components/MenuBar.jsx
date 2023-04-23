import { Box, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../contexts/colorModeContext';

export default function MenuBar() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Box display="inline-block">
      <Link href="/" paddingRight="10px">Home</Link>
      <Link href="/blog/2023-04-22">Latest</Link>
      <IconButton
        sx={{ ml: 1 }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
