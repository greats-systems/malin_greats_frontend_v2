import * as React from 'react';
import {useEffect, useState} from 'react'
import AppBar from '../ui-components/AppBar'
import ExploreHeading from '../ui-components/Headings/ExploreHeading'
import WhyUsHeading from '../ui-components/Headings/WhyUsHeading'
import Hero from '../ui-components/Hero'
import ErpOffering from '../ui-components/offerings/ErpOffering'
import CustomDevOffering from '../ui-components/offerings/CustomDevOffering'
import BlockchainOffering from '../ui-components/offerings/BlockchainOffering'
import WhyUs from '../ui-components/WhyUs'
import CustomArrows from '../ui-components/CustomArrows'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'


import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../../hooks/useAuth';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Home = () => {
  const { contextTest, state, handleClose, getInTouchState} = useAuth();
	
	  // const { vertical, horizontal, open } = state;
    const [open, setOpen] = useState(state)
    const vertical = 'top'
    const horizontal = 'center'

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <AppBar/>
    <Hero/>
    <ExploreHeading/>
    <ErpOffering/>
    <CustomDevOffering/>
    <BlockchainOffering/>
    <WhyUsHeading/>
    <WhyUs/>
    {/* <CustomArrows/> */}
    <GetInTouch/>
    <Footer/>

    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={getInTouchState}
        // onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={6000}
        >
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: '#143B65', backgroundColor: '#60FF5C' }}>
          The Smart Systems team have received your details, They will contact you shortly
        </Alert>
        </Snackbar>
    </>
  )
}

export default Home