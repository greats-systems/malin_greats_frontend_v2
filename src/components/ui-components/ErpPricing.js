import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {Container, Grid, Box, Stack} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from '@mui/material/Rating';
import TestimonialImg from '../../assets/testimonials-1.png'
import BasicPricing from './BasicSolution'
import MidtierPricing from './MidtierSolution'
import AdvancedPricing from './AdvancedSolution'

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

        <MidtierPricing/>

        </SwiperSlide>
        <SwiperSlide>

        <AdvancedPricing/>

        </SwiperSlide>
        {/* <SwiperSlide>

        <BasicPricing/>

        </SwiperSlide> */}
      </Swiper>
    </Container>
    </Box>
  );
}
