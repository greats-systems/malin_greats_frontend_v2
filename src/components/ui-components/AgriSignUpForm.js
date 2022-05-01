import * as React from 'react';
import {useState} from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Container } from '@mui/material';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// import loader from '../../assets/images/loader.svg'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




const initialValues = {
  name: '',
  email: '',
}




const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '-50px',
        // [theme.breakpoints.down('sm')]: {
        //   marginTop: '-500px',
        //         },
    },
        heading: {
            fontFamily: 'Manrope',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '38px',
            lineHeight: '55px',
            color: '#FFF',
            margin: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
            fontWeight: '600',
              fontSize: '35px',  
              lineHeight: '40px',
              }
    
        },
    input:{
      [theme.breakpoints.down('sm')]: {
        marginTop: '-500px',
              },

    },
    SubmitBtn: {
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '25px',
        textTransform:'none',
        textDecoration:'none',
        width: '100%',
        backgroundColor: '#143B65',
                                            
        borderRadius: '5px',color: '#FFFFFF',
        padding: '10px',
        '&:hover': {
        border: '2px solid #007BFF',
        }                            
    }

}))


export default function AgriSignUpForm({url, snackBarState}) {

    const [snackBar, setSnackBar] = useState('Nothing')
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
  if(values.name != '' && values.email != '') {
  setLoading(true)

  var formdata = new FormData();
  formdata.append("fullName", values.name);
  formdata.append("email", values.email);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const res = await fetch("https://backend.malingreats.org/agric-signup", requestOptions)
  // const res = await fetch("http://localhost:8000/agric-signup", requestOptions)
  console.log(res.status)
    if (res.status === 200) {
        setLoading(false)
        // handleClick()
      }
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
              marginTop: '25px'
            }}
            >
                <h1 className={classes.heading}>Sign Up <br/>SmartFarma</h1>
            <div>
                <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                // id="outlined-size-small"
                label=" Enter Name"
                id="standard-basic"
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                size="small"
                sx={{backgroundColor: '#FFF', 
                border: 'none', 
                borderRadius: '5px', 
                opacity: '0.4', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
           
                <TextField
                name="email"
                value={values.email}
                onChange={handleInputChange}
                label=" Enter Email"
                id="standard-basic"
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                size="small"
                sx={{backgroundColor: '#FFF', 
                border: 'none', 
                borderRadius: '5px', 
                opacity: '0.4', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
              {loading ? 
                  <Button className={classes.SubmitBtn} 
                  type='submit'
                  variant="contained"
                  disabled="true"
                  sx={{ 
                  width: '93%',
                  margin: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '25px',
                  backgroundColor: '#60FF5C',                            
                  borderRadius: '5px',color: '#143B65',
                  padding: '10px',
              }}        
                  >
                      Loading...
                  </Button> 
                  :
                  <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ 
            width: '93%',
            margin: '10px',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '25px',
            backgroundColor: '#60FF5C',                            
            borderRadius: '5px',color: '#143B65',
            padding: '10px',
        }}        
            >
                Sign Up
            </Button> 
                }
           {/* {loading ? 
            <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '80%' }}        
            >
                <img src={loader} alt='loading' style={{ height: '45px'}}/>
            </Button>
            :
            <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '90%' }}        
            endIcon={<ForwardToInboxIcon />}>
                GET STARTED
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