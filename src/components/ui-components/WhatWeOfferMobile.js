import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../assets/industry-solution-bg.svg'
import CSMobile from '../../assets/cs-mobile.png'



const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '75px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '45px',
        color: '#000',
        marginBottom: '5px'

    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        marginBottom: '5px'
    },
    list: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '5px',
        color: '#000',
        margin: '15px'
    },
    dot: {
        color: '#143B65', 
        transform: 'rotate(-0.1turn)'
    },
    button: {
        marginTop: '20px',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '25px',
        textAlign: 'center',
        background: '#143B65',
        color: '#FFF',
        borderRadius: '10px',
        width: '45%'
    }
    
}))


const WhatWeOfferMobile = () => {
    const classes = useStyles();

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
       
        <Box>
            <h2 className={classes.heading}>Mobile Based</h2>
            <h5 className={classes.body}>We develop iOS and Android mobile applications as well as complementary web based dashboards for all industries.</h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Consulting</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Native and Cross Platform Apps</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Mordern UI Design</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Web Portals</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> API Intergration</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Maintanance and Support</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Redesign</h6>
            </Box>
            <Button variant='contained'
            className={classes.button}
            >
                Work With Us
            </Button>
        </Box>

        <img 
        src={CSMobile} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        </Box>
    </Container>
    </Box>
  )
}

export default WhatWeOfferMobile