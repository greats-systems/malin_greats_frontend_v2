import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../../assets/industry-solution-bg.svg'
import ErpImg from '../../../assets/erp-header.png'



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
        lineHeight: '65px',
        color: '#000',
        marginBottom: '5px',
        marginTop: '95px'

    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        marginBottom: '25px'
    },
    button: {
        marginTop: '20px',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '14px',
      
        
    },
    img: {
        width: '100%',
    }
    
}))


const ErpOffering = () => {
    const classes = useStyles();

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Grid container spacing={3}  >
        <Grid item xs={6}>
        <Box>
            <h2 className={classes.heading}>Enterprise Resource Software</h2>
            <h5 className={classes.body}>We offer a single enterprise management solution to keep track of all your business processes. Real time management, analytical insights, mobile and desktop friendly, plus 500+ custom features to choose from. The perfect solution, no matter what industry you’re in.</h5>
            <Button variant='contained'
            sx={{
                lineHeight: '25px',
                textAlign: 'center',
                background: '#143B65',
                color: '#FFF',
                borderRadius: '10px',
                width: '35%',
                textTransform: 'none'
            }}
            className={classes.button}
            >
                Learn More
            </Button>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <img 
        src={ErpImg} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        </Grid>
        </Grid>
    </Container>
    </Box>
  )
}

export default ErpOffering