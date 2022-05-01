import React from 'react'
import {Container, Box, Grid, Stack} from '@mui/material'
import MoneySvg from '../../assets/erp-vp-money.svg'
import SecuritySvg from '../../assets/erp-vp-security.svg'
import UsersSvg from '../../assets/erp-vp-users.svg'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
header: {
    width: '65%',
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '35px',  
    lineHeight: '45px',
    marginTop: '45px',
    marginBottom: '45px',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '600',
    fontSize: '35px',  
    lineHeight: '40px',
    marginTop: '35px',
    width: '90%'
    }

    // display: 'flex',
    // justifyContent: 'center',
    // aignItems: 'center',

},
text: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',  
  lineHeight: '15px', 
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  justifyContent: 'center',
  lineHeight: '20px',
  paddingLeft: '25px'
  }
},
grid: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // minHeight: '150px'
}, 
img: {
  width: '100px',
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '65px',
  }
},

    
}))

const Values = () => {
    const classes = useStyles();
  return (
    <Container sx={{marginBottom:'75px'}}>
        <h3 className={classes.header}>One platform to increase productivity and improve your business.</h3>
  
        <Grid container spacing={2}>
        <Grid item xs={4} className={classes.grid} >
        <Stack spacing={2} justifyContent="center" alignItems="center">
        <img className={classes.img} src={UsersSvg} alt=''/>
        <h4 className={classes.text}>Multiple User Login</h4>
        </Stack>

        </Grid>
        <Grid item xs={4} className={classes.grid}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
        
        <img className={classes.img} src={SecuritySvg} alt=''/>
        <h4 className={classes.text}>100% Secure</h4>
        </Stack>
        </Grid>
        <Grid item xs={4} className={classes.grid}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
        <img className={classes.img} src={MoneySvg} alt=''/>
        <h4 className={classes.text}>Affordale Monthly Sales</h4>
        </Stack>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default Values