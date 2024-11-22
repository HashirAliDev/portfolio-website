import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  ListItemButton,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  onThemeToggle: () => void;
  currentTheme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, currentTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const menuItems = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    const currentPath = location.pathname;
    if (path === 'Home') return currentPath === '/';
    return currentPath === `/${path.toLowerCase()}`;
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            component={Link}
            to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            onClick={handleDrawerToggle}
            selected={isActive(item)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemText
              primary={item}
              sx={{
                textAlign: 'center',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem disablePadding>
        <ListItemButton onClick={onThemeToggle} sx={{ justifyContent: 'center' }}>
          <IconButton color="inherit" sx={{ ml: 1 }}>
            {currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <AppBar position="sticky" elevation={2}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Portfolio
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Your Name
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    color="inherit"
                    sx={{
                      mx: 1,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive(item) ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'primary.light',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Tooltip title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}>
                  <IconButton color="inherit" onClick={onThemeToggle} sx={{ ml: 2 }}>
                    {currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          )}
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
