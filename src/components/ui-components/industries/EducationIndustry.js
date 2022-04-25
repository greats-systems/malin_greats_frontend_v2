import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../../assets/industry-solution-bg.svg'
import IndustryEdu from '../../../assets/industry-solution-edu.png'



const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '5px',
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
        src={IndustryEdu} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        <Box>
            <h2 className={classes.heading}>Education</h2>
            <h5 className={classes.body}>An ERP software for educational institutes and schools. Schools of any size can manage people, classes and share resources through a built in interactive portal.</h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Instructors, Programs and Courses</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Store Student Information</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Take Student Attendance</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Publish Programs on Portal</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Online Admission</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Plan Assesment and Analyse Results</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Automate Fees Receipts</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Set Up Fees Structures</h6>
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