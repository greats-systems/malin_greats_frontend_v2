import React, {useEffect, useState} from 'react'
import AppBar from '../ui-components/AppBar'
import ErpHero from '../ui-components/ErpHero'
import IndustriesHeading from '../ui-components/Headings/IndustryHeading'
import CustomSolutionsHeading from '../ui-components/Headings/CustomSolutionsHeading'
import AgricultureIndustry from '../ui-components/industries/AgricultureIndustry'
import EducationIndustry from '../ui-components/industries/EducationIndustry'
import RetailIndustry from '../ui-components/industries/RetailIndustry'
import Values from '../ui-components/Values'
import CustomArrows from '../ui-components/CustomArrows'
import ErpPricing from '../ui-components/ErpPricing'
import FAQSection from '../ui-components/FAQSection'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../../hooks/useAuth';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// import BasicSolution from '../ui-components/BasicSolution'
const Erp = () => {

  const { contextTest, state, handleClose, getInTouchState} = useAuth();
	
	  // const { vertical, horizontal, open } = state;
    const [open, setOpen] = useState(state)
    const vertical = 'top'
    const horizontal = 'center'
  

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  // useEffect(() => {
	// 	alert("State is",state)
	// }, [state])
  return (
    <>
    <AppBar/>
    <ErpHero/>
    <IndustriesHeading/>
    <AgricultureIndustry/>
    <RetailIndustry/>
    <EducationIndustry/>
    <CustomSolutionsHeading/>
    {/* <BasicSolution/> */}
    <ErpPricing/>
    <Values/>
    {/* <CustomArrows/> */}
    <FAQSection/>
    <GetInTouch/>
    <Footer/>

    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={state}
        // onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={6000}
        >
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: '#143B65', backgroundColor: '#60FF5C' }}>
          You have successfully signed up for Smart Systems
          Check your inbox for a confirmation email
          In about 10 to 15 min
        </Alert>
        </Snackbar>

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
  )}
export default Erp