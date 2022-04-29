import { Box } from '@mui/material'
import React from 'react'
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
    [theme.breakpoints.down('sm')]: {
      fontWeight: '600',
    fontSize: '35px',  
    lineHeight: '40px',
    marginTop: '75px',
    }

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
  [theme.breakpoints.down('sm')]: {
    fontWeight: '350',
  fontSize: '20px',  
  lineHeight: '25px',
  }

}
    
}))

const CustomSolutionsHeading = () => {
    const classes = useStyles();

  return (
    <Box>
        <h1 className={classes.textPrimary}>Custom Solutions</h1>
        <h4 className={classes.textSecondary}>Choose your own features to  suit your business needs no matter what industry you’re in. </h4>
    </Box>
  )
}

export default CustomSolutionsHeading