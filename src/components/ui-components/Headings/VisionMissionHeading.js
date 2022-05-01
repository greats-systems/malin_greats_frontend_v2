import { Box, Container} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    topBox: {
        marginTop: '250px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '95px',

              },
    },
textPrimary: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '50px',  
    lineHeight: '50px',
    marginTop: '95px',

    display: 'flex',
    justifyContent: 'center',
    aignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '600',
      fontSize: '35px',  
      lineHeight: '35px',
      marginTop: '125px'
  }

},
    
}))

const VisionMissionHeading = () => {
    const classes = useStyles();

  return (
    
        <Container>
            <Box className={classes.topBox}>
                <h1 className={classes.textPrimary}>What We Stand For</h1>
            </Box>
        </Container>
   
  )
}

export default VisionMissionHeading