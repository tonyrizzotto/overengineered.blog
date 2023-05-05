import { useState } from 'react';
import { useTheme } from '@mui/material/node/styles/index.js';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { useColorMode } from '../contexts/colorModeContext';
import rocketLink from '../assets/rocket.svg';

const pages = [
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: 'https://www.linkedin.com/in/tony-rizzotto/',
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="static"
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Tony Rizzotto"
            src={rocketLink}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            OEI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={theme.palette.text.primary}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Mobile Menu */}
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.url}
                    target={page.name === 'Contact' ? '_blank' : ''}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            alt="Tony Rizzotto"
            src={rocketLink}
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              color: theme.palette.text.primary,
              flexGrow: 1,
              fontWeight: 900,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            OEI
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
            {/* Desktop */}
            {pages.map((page) => (
              <Button
                key={page.name}
                target={page.name === 'Contact' ? '_blank' : ''}
                onClick={handleCloseNavMenu}
                href={page.url}
                sx={{
                  my: 2,
                  color: theme.palette.text.primary,
                  display: 'block',
                  fontWeight: 800,
                  fontSize: '16px',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Toggle Color Mode!">
              <IconButton
                sx={{ ml: 5 }}
                onClick={toggleColorMode}
              >
                {theme?.palette?.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
