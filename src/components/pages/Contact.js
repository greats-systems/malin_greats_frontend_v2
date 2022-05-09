import React, {useEffect, useState} from 'react'
import AppBar from '../ui-components/AppBar'
import ContactForm from '../ui-components/ContactForm'
import ContactHero from '../ui-components/ContactHero'
import ContactInfo from '../ui-components/ContactInfo'
import Footer from '../ui-components/Footer'
import FillDetailsHeading from '../ui-components/Headings/FillDetailsHeading'


import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../../hooks/useAuth';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {

  const { contextTest, state, handleClose, contactState} = useAuth();
	
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
    <ContactHero/>
    <FillDetailsHeading/>
    <ContactForm/>
    <ContactInfo/>
    <Footer/>

    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={state}
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

export default Contact