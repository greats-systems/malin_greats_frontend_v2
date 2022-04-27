import React from 'react'
import {Grid,Container,Box} from '@mui/material'

import { makeStyles } from '@mui/styles';
import FAQAccordion from './FAQAccordion'


const useStyles = makeStyles((theme) => ({
title :{
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',  
  lineHeight: '60px', 
},
text :{
    color: '#1B1C31',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',  
    lineHeight: '20px', 
  },
  
    
}))

const FAQSection = () => {
    const classes = useStyles();
    return (
    <Container sx={{marginTop: '75px'}}>
        <Grid container spacing={3}>
        <Grid item xs={6} className={classes.grid} >
            <h2 className={classes.title}>
                Any questions?
                <br/>
                We got you.
            </h2>
            <h5 className={classes.text}>
            Here are some things you may need to know! Can’t find what you’re looking for? No worries! Contact our sales team: sales@malingreatssmartsystems.co.zw for answers to any questions.
            </h5>
        </Grid>
        <Grid item xs={6} className={classes.grid} >
            <FAQAccordion/>
        </Grid>
        </Grid>
    </Container>
  )
}

export default FAQSection