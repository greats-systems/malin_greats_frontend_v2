import React from 'react'
import {Grid, Container, Box, Button} from '@mui/material'


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
topBox: {
   marginTop: '75px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',     
},
text: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',  
  lineHeight: '35px', 
  textAlign: 'left'
},


    
}))
const ProjectsIntro = () => {
    const classes = useStyles();
    return (
        <Container>
    <Box className={classes.topBox}>

        <h1 className={classes.text}>Some Of Our Projects</h1>
        <Button 
            variant="contained"
            sx={{
                backgroundColor: '#143B65',
                borderRadius: '10px',
                color: '#FFF',
                padding: '15px'

            }}
        >
            See All Projects
        </Button>
    </Box>
    </Container>
  )
}

export default ProjectsIntro