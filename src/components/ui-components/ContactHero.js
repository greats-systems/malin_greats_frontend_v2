import React from 'react'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Container, Box, Grid, Button } from '@mui/material';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import ContactHeader from '../../assets/contact-hero.svg'
import ErpHeaderBg from '../../assets/erp-header-bg.svg'

const useStyles = makeStyles((theme) => ({
    hero: {
        // minHeight: '90vh',
        maxHeight: '80vh',
        backgroundColor: '#FFF',
    },
    img: {
        width: '85%',
        marginTop: '35px',
        marginLeft: '125px',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'0px',
            marginTop: '15px',

        }
    },
    heading1: {
        width: '145%',
        zIndex: 5,
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '60px',
        lineHeight: '75px',

        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-35px',
            width: '90%',
            lineHeight: '30px',
            fontSize: '30px',
              },
    },
    body: {
        width: '150%',
        zIndex: 3,
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '120%',
        marginBottom: '25px',
        marginTop: '25px',

        color: '#64607D',
        [theme.breakpoints.down('sm')]: {
            // lineHeight: '30px',
            fontSize: '18px',
            width: '90%'

              },
    },
    buttonBox: {
        width: '125%',
        display: 'flex',
        justifyContent: 'space-between',

    },
    CTABtn: {
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '25px',
        textTransform:'none',
        textDecoration:'none',
        backgroundColor: '#143B65',
                                            
        borderRadius: '45px',color: '#FFFFFF',
        padding: '10px 25px 10px 25px',
        margin: '10px 25px 10px 25px',
        boxShadow: '0px 67px 80px rgba(55, 52, 169, 0.07), 0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481), 0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185), 0px 13.4px 13px rgba(55, 52, 169, 0.035), 0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815), 0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)',
        '&:hover': {
        border: '2px solid #007BFF',
        }                            
},
CTABtn2: {
    fontFamily:'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '25px',
    textTransform:'none',
    textDecoration:'none',
    backgroundColor: 'transparent',
                                        
    borderRadius: '45px',color: '#000',
    padding: '10px 25px 10px 25px',
    margin: '10px 25px 10px 25px',
    boxShadow: '0px 67px 80px rgba(55, 52, 169, 0.07), 0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481), 0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185), 0px 13.4px 13px rgba(55, 52, 169, 0.035), 0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815), 0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)',
    '&:hover': {
    border: '2px solid #007BFF',
    }                            
}
    
}))

const ContactHero = () => {
    const classes = useStyles();
    let navigate = useNavigate();

  return (
    <Box sx={{ backgroundImage: `url(${ErpHeaderBg})`}} className={classes.hero}>
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} sx={{marginTop: {xs: '15vh', lg: '25vh'}}}>

            <Box >
            <h2 className={classes.heading1}>
            Get in touch with us to find your solution.
            </h2>
            <h5 className={classes.body}>
            Provide us with your details and a member of our team will be in touch to schedule a consultation call.
            </h5>
            {/* <Button className={classes.CTABtn} 
            variant="contained"
            sx={{
                textDecoration:'none',
                backgroundColor: '#143B65',
                                            
                borderRadius: '45px',color: '#FFFFFF',
                padding: '10px 25px 10px 25px',
                margin: '10px 25px 10px 25px',
            }}
            onClick={(()=> {navigate("/erp");})}
            >
                Get Started
            </Button> */}
            </Box>
            
        </Grid>
        <Grid item xs={12} sm={12} md={8} sx={{marginTop: {xs: '5px', lg:'45px'}}}>
            <Box style={{}}>
            <img src={ContactHeader} alt="Malin Greats Erp Hero" className={classes.img} />
            </Box>
        
        </Grid>
        </Grid>
        </Container>


    </Box>
  )
}

export default ContactHero