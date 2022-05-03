import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import IndustryBg from '../../../assets/industry-solution-bg.svg'
import IndustryAgric from '../../../assets/industry-solution-agric.png'
import ErpHeaderBg from '../../../assets/erp-header-bg.svg'


import AgriSignUpForm from '../../ui-components/AgriSignUpForm'


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
        fontSize: '18px',
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
    }
    
}))


const AgricultureIndustry = ({snackBarState}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
        
        <Box>
            <h2 className={classes.heading}>Smart Healthcare</h2>
            <h5 className={classes.body}>Explore Farming Agribusiness Resource Management App (SMART FARMA)- a comprehensive agriculture ERP solution for modern farmers </h5>
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
        <img 
        src={IndustryAgric} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal} sx={{ backgroundImage: `url(${ErpHeaderBg})`}}>
          <AgriSignUpForm snackBarState={snackBarState}/>
        </Box>
      </Modal>
    </Container>


    </Box>
  )
}

export default AgricultureIndustry