import { Box, Container } from '@mui/material'
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

}
    
}))

const WhyUsHeading = () => {
    const classes = useStyles();

  return (
    <Container>
    <Box>
        <h1 className={classes.text}>Why Choose Us</h1>
    </Box>
    </Container>
  )
}

export default WhyUsHeading