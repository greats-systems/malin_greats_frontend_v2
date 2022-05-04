import { useNavigate } from 'react-router-dom'
import { Box, Container, Grid, Stack, Button } from '@mui/material'
import React from 'react'

import line from '../../assets/line.png'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
title: {
  color: '#FFF',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '30px',  
  lineHeight: '5px', 
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    lineHeight: '30px'
}
  
},
text: {
  color: '#FFF',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',  
  lineHeight: '25px', 
  textAlign: 'left',
  margin: '5px'
},
img: {
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '85px',
  [theme.breakpoints.down('sm')]: {
    // transform: 'rotate(0.5turn)',
    display: 'none'
}
},
box: {
    backgroundColor: '#143B65 !important',
}

    
}))

const SolutionProcess = () => {
    let navigate = useNavigate()
    const classes = useStyles();
    return (
    <Box sx={{backgroundColor: '#143B65', padding: {xs: '5px', md: '45px'}}}>
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={2}>
                    <img className={classes.img} src={line} alt=""/>
                </Grid>
                <Grid item xs={12} md={10} sx={{zIndex: '5'}}>
                <Stack spacing={2}>
                    <Box>
                        <h2 className={classes.title}>Discovery Call and Research</h2>
                        <h6 className={classes.text}>First, we hop on a call with you and your team to discuss your needs and expectations. Then we do research based on your requirements before preparing a requirements specification document for your approval.</h6>
                    </Box>
                    <Box>
                        <h2 className={classes.title}>System Design</h2>
                        <h6 className={classes.text}>Based on the  system requirements, the developement team works on defining the overall software architecture: an organized flow of elements in a software code and pricing for the project.</h6>
                    </Box>
                    <Box>
                        <h2 className={classes.title}>Interface Design</h2>
                        <h6 className={classes.text}>The UI/UX team builds a prototype version of the software. This allows you and the development team to visualize the overall look and feel of the software. The design is sent for your approval. </h6>
                    </Box>
                    <Box>
                        <h2 className={classes.title}>Development and Testing</h2>
                        <h6 className={classes.text}>We work on bringing the concept into reality using programming languages that are relevant to your project. Next, a team tests the written code for bugs and other inconsistencies.</h6>
                    </Box>
                    <Box>
                        <h2 className={classes.title}>Deployment</h2>
                        <h6 className={classes.text}> The finalized code is implemented and then deployed or delivered to the customers to be used. If the end user has any changes or if errors found, the development team works to correct them.</h6>
                    </Box>
                    <Box>
                        <h2 className={classes.title}>Maintenance</h2>
                        <h6 className={classes.text}>Once the customers start using well-developed software, we work on updating it from time to time to maintain it’s standard and accomodate new requirements.</h6>
                    </Box>
                   
                </Stack>
                </Grid>
            </Grid>

            <Button 
            variant="contained"
            onClick={() => navigate('/contact')}
            sx={{
                backgroundColor: '#60FF5C',
                borderRadius: '10px',
                color: '#000',
                margin: '45px',
                padding: '13px',
                display: 'flex',
                justifyContent: 'center',
                margin: {xs:'5px', md: '45px'},
            }}
            >
                Work With Us
            </Button>
        </Container>
    </Box>
  )
}

export default SolutionProcess