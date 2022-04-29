import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
text: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '50px',  
    lineHeight: '60px',
    marginTop: '175px',

    display: 'flex',
    justifyContent: 'center',
    aignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '600',
    fontSize: '35px',  
    lineHeight: '40px',
    marginTop: '75px',

        },

}
    
}))

const FillDetailsHeading = () => {
    const classes = useStyles();

  return (
    <Box>
        <h1 className={classes.text}>Fill Out Your Details</h1>
    </Box>
  )
}

export default FillDetailsHeading