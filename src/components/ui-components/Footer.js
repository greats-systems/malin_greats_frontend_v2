import * as React from 'react';
import {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { Container } from '@mui/material';
import Logo from './Logo'
import { useNavigate } from 'react-router-dom';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';


const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        // marginTop: '24px',
    },
    subscribeTitle: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        // margin: '0px',
        fontSize: '20px',
        lineHeight: '25px',
        
        color: '#181433',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            marginTop: '45px'    
        },
    },
    title: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        // margin: '0px',
        fontSize: '20px',
        lineHeight: '25px',
        
        color: '#181433',
    },
    text: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
        marginTop: '35px',
        
        color: '#64607D',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15px'},
    },
    lowerText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '15px',
        marginTop: '5px',
        
        color: '#181433',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '5px'},
    },
    list: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '15px',
        margin: '10px',
        cursor: 'pointer',
        
        color: '#181433',
        '&:hover': {
            color: '#FF6D1C',
        }
    },
}))

const initialValues = {
    email: '',
  }

export default function Footer({url}) {
    let navigate = useNavigate()
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
        if(values.email !== '') {
        //   setLoading(true)
          
        var formdata = new FormData();
        formdata.append("email", values.email);
      
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
      
        const res = await fetch("https://backend.malingreatssmartsystems.co.zw/api/newsletter", requestOptions)
        console.log(res.status)
          if (res.status === 200) {
            //   setLoading(false)
              // handleClick()
            }
        } 
      }

    

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#FFF', paddingTop: '30px', marginTop: '35px'}}>
        <Container>
      <Grid container spacing={1} sx={{paddingBottom: '25px' }}>
        <Grid item xs={12} md={3} sx={{marginTop: '20px'}}>
        {/* <img src={logo} alt=" " className={classes.img}/> */}
        <Logo/>
        <h4 className={classes.text}>
        Transforming communities with sustainable technology.
        </h4>
        <Stack spacing={2} direction='row' alignItems='center'>
            <LinkedInIcon sx={{color: '#143B65'}}/>
            <WhatsAppIcon sx={{color: '#143B65'}}/>
            <FacebookIcon sx={{color: '#143B65'}}/>
        </Stack>

        </Grid>
        <Grid item xs={12} md={5}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6}>
                    <h3 className={classes.title} >Company</h3>
                    <Box sx={{marginTop: {md:'45px'}}}>
                    <h5 className={classes.list} onClick={() => {navigate("/about")}}>About Us</h5>
                    <h5 className={classes.list} onClick={() => {navigate("/contact")}}>Get In Touch</h5>
                    <h5 className={classes.list} onClick={() => {navigate("/")}}>Blog</h5>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <h3 className={classes.title} >What We Offer</h3>
                    <Box sx={{marginTop: {md:'45px'}}}>
                    <h5 className={classes.list} onClick={() => {navigate("/")}}>Blockchain</h5>
                    <h5 className={classes.list} onClick={() => {navigate("/customDev")}}>Custom Software</h5>
                    <h5 className={classes.list} onClick={() => {navigate("/erp")}}>Enterprise Systems</h5>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
        <h3 className={classes.subscribeTitle}>Subscribe to our blog</h3>
        <Box sx={{marginTop: {md:'45px'}}}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
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
            <Stack spacing={0} direction="row" alignItems="center">
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
                sx={{backgroundColor: '#F9F9F9', 
                border: 'none', 
                borderRadius: '5px', 
                padding: '1px', 
                margin: '1px', 
                outline: 'none',
                width: '135%'}}
                />
           <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ 
            width: '50%',
            height: '50%',
            fontSize: '16px',
            backgroundColor: '#60FF5C',                            
            borderRadius: '5px',color: '#000',
            textTransform: 'none'
        }}        
        >
        Subscribe
            </Button> 
            </Stack>
        </Box>
        </Box>
        </Grid>
      </Grid>
      
      </Container>
      <Box sx={{backgroundColor: '#FFF', paddingTop: '15px', borderTop: '1px solid #E5E5E5'}}>
      <Container>
      <Grid item >
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '30px'
        }}>
            <h4 className={classes.lowerText} sx={{textAlign: 'center', float: {md:'left'}}}>Copyright @ Malin Greats Smart Systems. All Rights Reserved.</h4>
        </Box>
        {/* <Grid item xs={12} md={6}>
            <h4 className={classes.lowerText} style={{textAlign: 'center',}}>Powered By <span style={{color: '#FF6D1C'}}>Malin Greats Smart Systems</span></h4>
        </Grid> */}
        </Grid>
        </Container>
        </Box>
    </Box>
  );
}
