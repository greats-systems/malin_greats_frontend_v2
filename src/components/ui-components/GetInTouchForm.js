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
        marginTop: '-50px'
    },
    input:{

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

  alert('Submitting')

//   var formdata = new FormData();
//   formdata.append("name", values.name);
//   formdata.append("message", values.message);
//   formdata.append("subject", interest);
//   formdata.append("email", values.email);
//   formdata.append("phone", values.phone);

//   var requestOptions = {
//     method: 'POST',
//     body: formdata,
//     redirect: 'follow'
//   };

//   const res = await fetch(`${url}/api/add-clientemail`, requestOptions)
//   if (res.status === 200) {
//     setLoading(false)
//     handleClick()
//   }
}


  return (

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
              marginTop: '125px'
            }}
            >
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
                opacity: '0.2', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
           
                <TextField
                name="email"
                value={values.email}
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
                opacity: '0.2', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
           <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ 
            width: '93%',
            margin: '10px',
            fontSize: '16px',
            lineHeight: '25px',
            backgroundColor: '#143B65',                            
            borderRadius: '5px',color: '#FFFFFF',
            padding: '10px',
        }}        
            >
                GET STARTED
            </Button> 
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
    //   </Container>
    //   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    //       Message Sent, You Will Be Replied Shortly
    //     </Alert>
    //   </Snackbar>
    // </Box>
  );
}