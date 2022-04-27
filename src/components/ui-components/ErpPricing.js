import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {Container, Grid, Box, Stack} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from '@mui/material/Rating';
import TestimonialImg from '../../assets/testimonials-1.png'
import BasicPricing from './BasicSolution'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../../swiperPricingStyle.css'
// import "./styles.css";
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
  textAlign: 'left'
},
name: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',  
  lineHeight: '30px', 
  textAlign: 'left'
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
  justifyContent: 'center'
},
box: {
    backgroundColor: '#143B65 !important',
}

    
}))

export default function App() {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
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
 
        <BasicPricing/>

        </SwiperSlide>
        <SwiperSlide>

        <BasicPricing/>

        </SwiperSlide>
        <SwiperSlide>

        <BasicPricing/>

        </SwiperSlide>
        <SwiperSlide>

        <BasicPricing/>

        </SwiperSlide>
      </Swiper>
    </Container>
    </Box>
  );
}
