// import { NavLink, useLocation, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

// import GitHubIcon from '@mui/icons-material/GitHub';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Stack from '@mui/material/Stack';
// import Logo from './Logo'
// import { makeStyles } from '@mui/styles';


// const pages = ['Products', 'Pricing', 'Blog'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const useStyles = makeStyles((theme) => ({
//   header: {
//       boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
//       background: 'radial-gradient(100% 9916.67% at 0.83% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 100%)',
//       [theme.breakpoints.down('sm')]: {
//           paddingTop: '0px'
//       }
//   },
//   navLinks: {
//                                           fontFamily: 'Manrope',
//                                           fontStyle: 'normal',
//                                           fontWeight: '700',
//                                           fontSize: '16px',
//                                           letterSpacing: '0.09em',
//                                           lineHeight: '19px',
//                                           textTransform:'upperCase',
//                                           textDecoration:'none',
//                                           color: '#143B65',
//                                           '&:hover': {
//                                               background: 'none',
//                                               color: '#F95C19'
//                                           },
          
//   },
                
  

// }));

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   // const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   // const handleOpenUserMenu = (event) => {
//   //   setAnchorElUser(event.currentTarget);
//   // };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   // const handleCloseUserMenu = () => {
//   //   setAnchorElUser(null);
//   // };


//   let activeStyle = {
//     color: '#60FF5C'
//   };
//     const classes = useStyles();
//     return (
//     <AppBar sx={{background: 'radial-gradient(100% 9916.67% at 0.83% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 100%)'}}>
//       <Container>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//             <Logo/>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
              
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">HOME</Typography>
//                 </MenuItem>
// 								<MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">ABOUT</Typography>
//                 </MenuItem>
// 								<MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">PORTIFOLIO</Typography>
//                 </MenuItem>
// 								<MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">BLOG</Typography>
//                 </MenuItem>
// 								<MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">CONTACT</Typography>
//                 </MenuItem>
            
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             <Logo/>
//           </Typography>
//           <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: '#143B65', display: 'block', fontFamily: 'Manrope', fontWeight: '600',}}
//               >
//                 <NavLink to="/"
//                   className={classes.navLinks}
//                   style={({ isActive }) =>
//                   isActive ? activeStyle : undefined
//                     }
//                 >Home</NavLink>
//               </Button>
// 			<Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', fontWeight: '600' }}
//                 // endIcon={<KeyboardArrowDownIcon />}
//               >
//                 <NavLink to="/erp"
//                   className={classes.navLinks}
//                   style={({ isActive }) =>
//                   isActive ? activeStyle : undefined
//                     }
//                 >ERP</NavLink>
//               </Button>
// 							<Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', fontWeight: '600' }}
//                 // endIcon={<KeyboardArrowDownIcon />}
//               >
                
//                 <NavLink to="/customDev"
//                   className={classes.navLinks}
//                   style={({ isActive }) =>
//                   isActive ? activeStyle : undefined
//                     }
//                 >Custom Dev</NavLink>
//               </Button>
// 							<Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
//               >
//                <NavLink to="/contact"
//                   className={classes.navLinks}
//                   style={({ isActive }) =>
//                   isActive ? activeStyle : undefined
//                     }
//                 >Contact</NavLink>
//               </Button>
// 							{/* <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
//               >
//                 Blog
//               </Button>
// 							<Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
//               >
//                 Contact
//               </Button> */}
           
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//           <Button 
//           variant="contained"
//           sx={{
//               bgcolor: '#143B65',
//               borderRadius: '10px',
//               textTransform: 'none',

//           }}
//           >Get in Touch</Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;





import * as React from 'react'
import {useState, useEffect} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Drawer from '@mui/material/Drawer';
// import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { makeStyles } from '@mui/styles';



// import {IconHome2, IconPhoneCheck, IconNotebook, IconTriangleSquareCircle, IconCircleDashed} from '@tabler/icons';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

// style constant
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
          color: '#60FF5C'
      },
            
    },
    navBtn: {
        fontFamily:'Oxanium',
        fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                            textTransform:'none',
                                            textDecoration:'none',
                                            // backgroundColor: '#FFFFFF',
                                            
                                    borderRadius: '5px',color: '#FFF',
                                    padding: '0px',
                                    '&:hover': {
                                        border: '2px solid #007BFF',
                                    }
                                    
    
}
}));

const style = {
    bgcolor: '#143B65',
}
const style2 = {
    bgcolor: 'transparent',
}

const ResponsiveAppBar = () => {
    let navigate = useNavigate()
    const classes = useStyles();
  const [drawerToggle, setDrawerToggle] = React.useState(false);
  const drawerToggler = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }
      setDrawerToggle(open);
  };

  let activeStyle = {
    color: '#60FF5C'
  };

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

//   alert(first)
  return (
    <AppBar position="fixed" sx={small ? style : style2} className={classes.header}>
      <Container>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Logo />
                            
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', md:'block', lg:'block', sm: 'none' } }} spacing={2}>
                            <Button className={classes.navLinks} >
                            <NavLink to="/"
                                className={classes.navLinks}
                                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                                >Home</NavLink>
                            </Button>
                            <Button 
                            className={classes.navLinks}
                            >
                                <NavLink 
                                to="/erp"
                                className={classes.navLinks}
                                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                                >ENTERPRISE SOLUTION</NavLink>
                                
                            </Button>
                            <Button className={classes.navLinks}>
                                <NavLink 
                                to="/customDev"
                                className={classes.navLinks}
                                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                                >CUSTOM DEVELOPMENT</NavLink>
                            </Button>
                            <Button className={classes.navLinks} >
                                <NavLink
                                to="/about"
                                className={classes.navLinks}
                                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                                >ABOUT</NavLink>
                            </Button>
                            <Button className={classes.navLinks} >
                                <NavLink
                                to="/contact"
                                className={classes.navLinks}
                                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                                >CONTACT</NavLink>
                            </Button>
                            <Button
                                disableElevation
                                variant="contained"   
                                // sx={{marginBottom: '5px'}}
                                sx={{
                                  bgcolor: '#143B65',
                                  borderRadius: '10px',
                                  textTransform: 'none',
                                  marginLeft: '75px'
                    
                              }}
                                onClick={() => navigate('/contact')}
                            >Get In Touch
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg:'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)}>
                                <MenuIcon sx={{color: '#143B65', fontSize: '38px', margin: 'auto'}}/>
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                <div
                                    sx={{
                                        width: 'auto'
                                    }}
                                    role="presentation"
                                    onClick={drawerToggler(false)}
                                    onKeyDown={drawerToggler(false)}
                                >
                                    <List>
                                        <ListItemButton onClick={()=> {
                                            navigate("/")
                                        }}>
                                            <ListItemIcon>
                                                <HomeIcon sx={{color: '#143B65'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Home" />
                                        </ListItemButton>

                                        <ListItemButton onClick={()=> {
                                            navigate("/erp")
                                        }}>
                                            <ListItemIcon>
                                                <AccountBalanceIcon sx={{color: '#143B65'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Enterprise Systems" />
                                        </ListItemButton>

                                        <ListItemButton onClick={()=> {
                                            navigate("/customDev")
                                        }}>
                                            <ListItemIcon>
                                                <SettingsIcon sx={{color: '#143B65'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Custom Development" />
                                        </ListItemButton>

                                        <ListItemButton onClick={()=> {
                                            navigate("/about")
                                        }}>
                                            <ListItemIcon>
                                                <PeopleAltIcon sx={{color: '#143B65'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="About" />
                                        </ListItemButton>

                                        <ListItemButton onClick={()=> {
                                            navigate("/contact")
                                        }}>
                                            <ListItemIcon>
                                                <LocalPhoneIcon sx={{color: '#143B65'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Contact US" />
                                        </ListItemButton>
                                        <ListItemButton >
                                        <Button
                                            disableElevation
                                            variant="contained"   
                                            fullWidth
                                            // sx={{marginBottom: '5px'}}
                                            sx={{
                                            bgcolor: '#143B65',
                                            borderRadius: '10px',
                                            textTransform: 'none',
                                            // marginLeft: '75px'
                                
                                        }}
                                            onClick={() => navigate('/contact')}
                                        >Get In Touch
                                        </Button>
                                        </ListItemButton>
                                        
                                    </List>
                                </div>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
