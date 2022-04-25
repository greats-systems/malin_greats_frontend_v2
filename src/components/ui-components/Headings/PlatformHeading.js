import React from 'react'
import MoneySvg from '../../assets/erp-vp-money.svg'
import SecuritySvg from '../../assets/erp-vp-security.svg'
import UsersSvg from '../../assets/erp-vp-users.svg'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
textPrimary: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '50px',  
    lineHeight: '30px',
    marginTop: '45px',

    display: 'flex',
    justifyContent: 'center',
    aignItems: 'center',

},
textSecondary: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',  
  lineHeight: '15px',

  display: 'flex',
  justifyContent: 'center',
  aignItems: 'center',

}
    
}))

const PlatformHeading = () => {
    const classes = useStyles();
  return (
    <Container>
        <h3>One platform to increase productivity and improve your business.</h3>
        <Box>
        <Grid container spacing={8}>
        <Grid item xs={4}>
        <img src={SecuritySvg} alt=''/>
        <h4>100% Secure</h4>
        </Grid>
        <Grid item xs={4}>
        <img src={UsersSvg} alt=''/>
        <h4>Multiple User Login</h4>
        </Grid>
        <Grid item xs={4}>
        <img src={MoneySvg} alt=''/>
        <h4>Affordale Monthly Sales</h4>
        </Grid>
      </Grid>
        </Box>
    </Container>
  )
}

export default PlatformHeading