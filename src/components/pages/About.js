import React, {useEffect, useState, forwardRef} from 'react'
import AppBar from '../ui-components/AppBar'
import AboutHero from '../ui-components/AboutHero'
import VisionMissionHeading from '../ui-components/Headings/VisionMissionHeading'
import ValuesHeading from '../ui-components/Headings/ValuesHeading'
import VisionMission from '../ui-components/VisionMission'
import AboutUsValues from '../ui-components/AboutUsValues'
import Footer from '../ui-components/Footer'
import GetInTouch from '../ui-components/GetInTouch'



import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../../hooks/useAuth';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const About = () => {
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
      <AboutHero/>
      <VisionMissionHeading/>
      <VisionMission/>
      <ValuesHeading/>
      <AboutUsValues/>
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

export default About