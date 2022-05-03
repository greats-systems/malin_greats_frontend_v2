import { Box, Button, Container } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';


import IndustryBg from '../../../assets/industry-solution-bg.svg'
import IndustryRetail from '../../../assets/industry-solution-retail.png'
import RetailSignUpForm from '../../ui-components/RetailSignUpForm'



const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
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
        width: '125%',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
        width: '100%',
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


const AgricultureIndustry = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Box className={classes.div}  >
        
        <Box>
            <h2 className={classes.heading}>Smart Retail</h2>
            <h5 className={classes.body}>Manage everyday transactions with ease through a retail ERP system that provides consistent flow of information in real-time. Point of Sale Real-time</h5>
            <Box >
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Point of Sale</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Real-time View of Product Availability</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Automated Stock Replenishment</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Multi-Store Retail Management</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Invoice Customers</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Billing and Pricing with notifications</h6>
                <h6 className={classes.list}><HdrWeakIcon className={classes.dot}/> Customer Acquisition and Loyalty</h6>
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
        src={IndustryRetail} 
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
        <Box className={classes.modal} >
          <RetailSignUpForm/>
        </Box>
      </Modal>
    </Container>
    </Box>
  )
}

export default AgricultureIndustry