import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Healthcare from '../../../assets/healthcare.svg'
import IndustryBg from '../../../assets/industry-solution-bg.svg'
import ErpHeaderBg from '../../../assets/erp-header-bg.svg'


import HealthcareSignUpForm from '../../ui-components/HealthcareSignUpForm'


const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '75px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          marginTop:'50px'
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
          lineHeight: '40px',
          }

    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '400',
              fontSize: '20px',  
              lineHeight: '25px',
              }
    },
    list: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        lineHeight: '5px',
        color: '#000',
        margin: '15px',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '400',
            lineHeight: '20px',
            fontSize: '16px',
              }
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
    },
    img: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
          }
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        backgroundColor: '#143B65',
        borderRadius: '10px',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          display: 'block'
        }
    },
    textBox: {
      marginTop: '-45px'
    }
    
}))


const HealthcareIndustry = ({snackBarState}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
        <img 
        src={Healthcare} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        <Box className={classes.textBox}>
            <h2 className={classes.heading}>Smart Healthcare</h2>
            <h5 className={classes.body}>An ERP solution for hospitals, clinics, and dispensaries that will help you maintain all critical data under one roof. </h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Patient Repositories,History & Appointments</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Manage Practitioner Data including Payroll</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Medicines And Equipment Management</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Map Out Clinical Procedures</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Document Storage</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Built-in Email Feature</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Billing and Pricing</h6>
            </Box>
            <Button variant='contained'
            // className={classes.button}
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
            onClick={handleOpen}
            >
                Free Sign Up
            </Button>
        </Box>
       
        </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal} sx={{ backgroundImage: `url(${ErpHeaderBg})`}}>
          <HealthcareSignUpForm closeModal={handleClose}/>
        </Box>
      </Modal>
    </Container>


    </Box>
  )
}

export default HealthcareIndustry