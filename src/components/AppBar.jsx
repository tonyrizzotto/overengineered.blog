/* global window */
import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
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
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { useFunContext } from '../contexts/funContext';
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
  const { fun, setFun } = useFunContext();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = ({ reason, page, destination }) => {
    setAnchorElNav(null);
    if (reason && (reason === 'backdropClick' || reason === 'escapeKeyDown')) {
      return;
    }
    if (page && page === 'Contact') {
      window.open(destination, '_blank');
    } else {
      navigate(destination);
    }
  };

  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar alt="Tony Rizzotto" src={rocketLink} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              onClick={() => navigate('/')}
              sx={{
                display: { xs: 'none', md: 'flex' },
                cursor: 'pointer',
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: theme.palette.text.primary,
                transition: theme.transitions.custom.colorMode,
                '&:hover': {
                  color: theme.palette.text.primaryAccent,
                },
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
                onClose={(_, reason) => handleCloseNavMenu({
                  reason,
                })}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Mobile Menu */}
                {pages.map((page) => (
                  <MenuItem key={page.name}>
                    <Typography
                      onClick={() => handleCloseNavMenu({ page: page.name, destination: page.url })}
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar alt="Tony Rizzotto" src={rocketLink} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              onClick={() => navigate('/')}
              sx={{
                cursor: 'pointer',
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
                <Typography
                  key={page.name}
                  target={page.name === 'Contact' ? '_blank' : ''}
                  onClick={() => handleCloseNavMenu({ page: page.name, destination: page.url })}
                  sx={{
                    margin: '0 1rem',
                    color: theme.palette.text.primary,
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    transition: theme.transitions.custom.colorMode,
                    '&:hover': {
                      color: theme.palette.text.primaryAccent,
                    },
                  }}
                >
                  {page.name}
                </Typography>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Toggle Fun Mode!">
                <IconButton sx={{ ml: 5 }} onClick={() => setFun((prevState) => !prevState)}>
                  {fun ? '🎉' : '💤'}
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Toggle Color Mode!">
                <IconButton sx={{ ml: 5 }} onClick={toggleColorMode}>
                  {theme?.palette?.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default ResponsiveAppBar;
