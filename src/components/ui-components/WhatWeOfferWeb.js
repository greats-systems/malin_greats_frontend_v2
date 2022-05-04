import { useNavigate } from 'react-router-dom'
import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../assets/industry-solution-bg.svg'
import CSWeb from '../../assets/cs-desktop.png'



const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '75px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: '45px'
      
        }
    },
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '45px',
        color: '#000',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '600',
            fontSize: '35px',  
            lineHeight: '5px',
        }

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


const WhatWeOfferWeb = () => {
    let navigate = useNavigate()
    const classes = useStyles();

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
        <img 
        src={CSWeb} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        <Box>
            <h2 className={classes.heading}>Web Based</h2>
            <h5 className={classes.body}>We create all types of web-based software that prioritise great user experiences and provide analytics.</h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Websites</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Web Portals</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Ecommerce</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> UX/UI</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Support and Mainatenance</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Intergration</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Redesign</h6>
            </Box>
            <Button variant='contained'
            onClick={() => navigate('/contact')}
            className={classes.button}
            sx={{
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
            }}
            >
                Work With Us
            </Button>
        </Box>
        </Box>
    </Container>
    </Box>
  )
}

export default WhatWeOfferWeb