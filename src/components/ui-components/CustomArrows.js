import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {Container, Grid, Box, Stack} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from '@mui/material/Rating';
import TestimonialImg from '../../assets/testimonials-1.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import '../../swiperStyle.css'

// import required modules
import { Pagination, Navigation } from "swiper";


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
text: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',  
  lineHeight: '35px', 
  textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
              fontWeight: '500',
  fontSize: '22px',  
  lineHeight: '30px',
            }
},
name: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',  
  lineHeight: '30px', 
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontWeight: '500',
fontSize: '18px',  
lineHeight: '25px',
  }
},
title: {
  color: '#64607D',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '17px',  
  lineHeight: '30px', 
  textAlign: 'left'
},
img: {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    height: '50%'
  }
},
textBox: {
  marginTop: '95px',
            [theme.breakpoints.down('sm')]: {
              marginTop: '25px'
            }
}
    
}))

export default function App() {
    const classes = useStyles();
    return (
    <Container>
      <Swiper
        // pagination={{
        //   type: "progressbar",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
 
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={TestimonialImg} alt=''/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.textBox} >
          <FormatQuoteIcon sx={{color: '#60FF5C', transform: 'rotate(0.5turn)', fontSize: '50px', display: 'block'}}/>
          
          <h2 className={classes.text}>Thanks to your custom ERP software, my team and I are able to view all our sales information, create and send out offers and manange stock in one place.</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                  <h3 className={classes.name}>Name <br/> <span className={classes.title}>CEO Company</span></h3>
                  {/* <h4 className={classes.title}>CEO Company</h4> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>

              </Grid>
            </Grid>
            <Rating sx={{color: '#60FF5C', fontSize: '30px'}} name="read-only" value={4} readOnly />
          </Grid>
        </Grid>

        </SwiperSlide>
        <SwiperSlide>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={TestimonialImg} alt=''/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.textBox} >
          <FormatQuoteIcon sx={{color: '#60FF5C', transform: 'rotate(0.5turn)', fontSize: '50px', display: 'block'}}/>
          
          <h2 className={classes.text}>Thanks to your custom ERP software, my team and I are able to view all our sales information, create and send out offers and manange stock in one place.</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                  <h3 className={classes.name}>Name <br/> <span className={classes.title}>CEO Company</span></h3>
                  {/* <h4 className={classes.title}>CEO Company</h4> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>

              </Grid>
            </Grid>
            <Rating sx={{color: '#60FF5C', fontSize: '30px'}} name="read-only" value={4} readOnly />
          </Grid>
        </Grid>


        </SwiperSlide>
        <SwiperSlide>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={TestimonialImg} alt=''/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.textBox}>
          <FormatQuoteIcon sx={{color: '#60FF5C', transform: 'rotate(0.5turn)', fontSize: '50px', display: 'block'}}/>
          
          <h2 className={classes.text}>Thanks to your custom ERP software, my team and I are able to view all our sales information, create and send out offers and manange stock in one place.</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                  <h3 className={classes.name}>Name <br/> <span className={classes.title}>CEO Company</span></h3>
                  {/* <h4 className={classes.title}>CEO Company</h4> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>

              </Grid>
            </Grid>
            <Rating sx={{color: '#60FF5C', fontSize: '30px'}} name="read-only" value={4} readOnly />
          </Grid>
        </Grid>


        </SwiperSlide>
        <SwiperSlide>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={TestimonialImg} alt=''/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.textBox} >
          <FormatQuoteIcon sx={{color: '#60FF5C', transform: 'rotate(0.5turn)', fontSize: '50px', display: 'block'}}/>
          
          <h2 className={classes.text}>Thanks to your custom ERP software, my team and I are able to view all our sales information, create and send out offers and manange stock in one place.</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                  <h3 className={classes.name}>Name <br/> <span className={classes.title}>CEO Company</span></h3>
                  {/* <h4 className={classes.title}>CEO Company</h4> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>

              </Grid>
            </Grid>
            <Rating sx={{color: '#60FF5C', fontSize: '30px'}} name="read-only" value={4} readOnly />
          </Grid>
        </Grid>


        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
