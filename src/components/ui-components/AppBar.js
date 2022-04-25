import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';
import Logo from './Logo'

const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar sx={{bgcolor: '#fff',}}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">HOME</Typography>
                </MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">ABOUT</Typography>
                </MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">PORTIFOLIO</Typography>
                </MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">BLOG</Typography>
                </MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">CONTACT</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Logo/>
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#143B65', display: 'block', fontFamily: 'Manrope', fontWeight: '600', borderBottom: '2.3px solid #143B65'}}
              >
                HOME
              </Button>
			<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontWeight: '600' }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                What We Offer
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontWeight: '600' }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                
                Our Projects
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
              >
                About Us
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
              >
                Blog
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
              >
                Contact
              </Button>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button 
          variant="contained"
          sx={{
              bgcolor: '#143B65',
              borderRadius: '10px',
              textTransform: 'none',

          }}
          >Get in Touch</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
