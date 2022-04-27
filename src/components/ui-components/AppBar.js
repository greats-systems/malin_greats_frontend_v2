import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
import { makeStyles } from '@mui/styles';


const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles((theme) => ({
  header: {
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
      background: 'radial-gradient(100% 9916.67% at 0.83% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 100%)',
      [theme.breakpoints.down('sm')]: {
          paddingTop: '0px'
      }
  },
  navLinks: {
      fontFamily: 'Manrope',
                                          fontStyle: 'normal',
                                          fontWeight: '700',
                                          fontSize: '16px',
                                          letterSpacing: '0.09em',
                                          lineHeight: '19px',
                                          textTransform:'upperCase',
                                          textDecoration:'none',
                                          color: '#143B65',
                                          '&:hover': {
                                              background: 'none',
                                              color: '#F95C19'
                                          },
          
  },
                
  

}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
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


  let activeStyle = {
    color: '#60FF5C'
  };
    const classes = useStyles();
    return (
    <AppBar sx={{background: 'radial-gradient(100% 9916.67% at 0.83% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 100%)'}}>
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
                sx={{ my: 2, color: '#143B65', display: 'block', fontFamily: 'Manrope', fontWeight: '600',}}
              >
                <NavLink to="/"
                  className={classes.navLinks}
                  style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                    }
                >Home</NavLink>
              </Button>
			<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontWeight: '600' }}
                // endIcon={<KeyboardArrowDownIcon />}
              >
                <NavLink to="/erp"
                  className={classes.navLinks}
                  style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                    }
                >ERP</NavLink>
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontWeight: '600' }}
                // endIcon={<KeyboardArrowDownIcon />}
              >
                
                <NavLink to="/customDev"
                  className={classes.navLinks}
                  style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                    }
                >Custom Dev</NavLink>
              </Button>
							<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
              >
               <NavLink to="/contact"
                  className={classes.navLinks}
                  style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                    }
                >Contact</NavLink>
              </Button>
							{/* <Button
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
              </Button> */}
           
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
