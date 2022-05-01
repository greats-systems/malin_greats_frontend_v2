import { Box, Container} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    topBox: {
        marginTop: '180px',
        marginBottom: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '80px',
            marginBottom: '40px',
        }
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
      marginTop: '15px'
  }

},
    
}))

const VisionMissionHeading = () => {
    const classes = useStyles();

  return (
    
        <Container>
            <Box className={classes.topBox}>
                <h1 className={classes.textPrimary}>Our Values</h1>
            </Box>
        </Container>
   
  )
}

export default VisionMissionHeading