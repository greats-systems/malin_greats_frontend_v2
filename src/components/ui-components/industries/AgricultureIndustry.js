import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../../assets/industry-solution-bg.svg'
import IndustryAgric from '../../../assets/industry-solution-agric.png'



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


const AgricultureIndustry = () => {
    const classes = useStyles();

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
        <img 
        src={IndustryAgric} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        <Box>
            <h2 className={classes.heading}>Agriculture</h2>
            <h5 className={classes.body}>Modern farming requires modern solutions and this comprehensive agriculture ERP software for farmers is just that</h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Keep Track of Assets</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Employees</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Capture Data and Plan Ahead</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Crops and Animals</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Record Orders and Create Invoices</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Keep an Accounting Record</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Multiple Farms</h6>
            </Box>
            <Button variant='contained'
            className={classes.button}
            >
                Sign Up
            </Button>
        </Box>
        </Box>
    </Container>
    </Box>
  )
}

export default AgricultureIndustry