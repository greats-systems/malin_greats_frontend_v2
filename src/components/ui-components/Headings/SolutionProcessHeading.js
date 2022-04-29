import { Box, Container} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    topBox: {
        marginTop: '150px'
    },
textPrimary: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '50px',  
    lineHeight: '50px',
    marginTop: '45px',

    display: 'flex',
    justifyContent: 'center',
    aignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '600',
      fontSize: '35px',  
      lineHeight: '35px',
      marginTop: '25px'
  }

},
    
}))

const SolutionProcessHeading = () => {
    const classes = useStyles();

  return (
    <Box className={classes.topBox}>
        <Container>
        <h1 className={classes.textPrimary}>From Idea To Working Solution</h1>
        </Container>
    </Box>
  )
}

export default SolutionProcessHeading