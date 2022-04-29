import * as React from 'react';
import {useState} from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { Container } from '@mui/material';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}


const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '-50px'
    },
    img: {
        width: '100%',
        // marginTop: '24px',
    },
    title: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        margin: '0px',
        fontSize: '25px',
        // lineHeight: '120%',
        
        color: '#007BFF',
    },
    text: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '35px',
        // lineHeight: '120%',
        margin: '0px',
        textAlign: 'center',
        
        color: '#222132',
    },
    CTABtn: {
        fontFamily:'Oxanium',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '25px',
        textTransform:'none',
        textDecoration:'none',
        width: '100%',
        // backgroundColor: '#FFFFFF',
                                            
        borderRadius: '5px',color: '#FFFFFF',
        padding: '10px',
        '&:hover': {
        border: '2px solid #007BFF',
        }                            
}

}))


export default function ContactForm({url}) {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const classes = useStyles();

    const [interest, setInterest] = useState('');
    const [about, setAbout] = useState('');

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  const handleChange2 = (event) => {
    setAbout(event.target.value);
  };

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]: value,
    })
}

const onSubmit = async(e) => {
  e.preventDefault()
  setLoading(true)

  var formdata = new FormData();
  formdata.append("fullName", values.name);
  formdata.append("message", values.message);
  formdata.append("phoneNumber", values.phone);
  formdata.append("email", values.email);
  formdata.append("companyName", values.company);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const res = await fetch('https://backend.malingreats.org/contact-email', requestOptions)
  console.log(res)
  if (res.status === 200) {
    setLoading(false)
    // handleClick()
  }

  
  
}


  return (
    <Box>
        <Container>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit} 
            action="#"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
            <div>
            <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                label="Full Name"
                id="outlined-size-small"
                size="medium"
                sx={{backgroundColor: '#f0f0f0',borderRadius: '0px'}}
                />

            <TextField
                name="company"
                value={values.company}
                onChange={handleInputChange}
                label="Company Name"
                id="outlined-size-small"
                size="medium"
                sx={{backgroundColor: '#f0f0f0',borderRadius: '0px'}}
                />

            
           
            <TextField
                name="email"
                value={values.email}
                onChange={handleInputChange}
                label="Email Address"
                id="outlined-size-small"
                size="medium"
                sx={{backgroundColor: '#f0f0f0',borderRadius: '0px'}}
                />
           
            <TextField
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
                label="Phone Number"
                id="outlined-size-small"
                size="medium"
                sx={{backgroundColor: '#f0f0f0',borderRadius: '0px'}}
                />
           
            <TextField
                name="message"
                value={values.message}
                onChange={handleInputChange}
                id="outlined-multiline-static"
                label="Tell us more about the project you have in mind"
                multiline
                rows={6}
                sx={{backgroundColor: '#f0f0f0', borderRadius: '0px'}}
                />

                {loading ? 
                <Button className={classes.CTABtn} 
                disabled="true"
                type='submit'
                variant="contained" 
                sx={{textTransform:'none',
                textDecoration:'none',
                width: '35%',
                margin: '25px',
                backgroundColor: '#143B65',
                display: 'flex',
                justifyContent: 'center',                                    
                borderRadius: '5px',color: '#FFFFFF',
                padding: '10px', 
            marginLeft: {xs: '95px', sm: '95px', md: '300px'}}}        
                    >
                    Loading....
                </Button> 
                :
                <Button className={classes.CTABtn} 
                type='submit'
                variant="contained" 
                sx={{textTransform:'none',
                textDecoration:'none',
                width: '35%',
                margin: '25px',
                backgroundColor: '#143B65',
                display: 'flex',
                justifyContent: 'center',                                    
                borderRadius: '5px',color: '#FFFFFF',
                padding: '10px', 
            marginLeft: {xs: '95px', sm: '95px', md: '300px'}}}        
                    >
                    Submit
                </Button> 
                }

            
           {/* {loading ? 
            <Button className={classes.CTABtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '80%' }}        
            >
                <img src={loader} alt='loading' style={{ height: '45px'}}/>
            </Button>
            :
            <Button className={classes.CTABtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '90%' }}        
            endIcon={<ForwardToInboxIcon />}>
                Book a delivery
            </Button> 
          } */}
            
            </div>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message Sent, You Will Be Replied Shortly
        </Alert>
      </Snackbar>
    </Box>
  );
}