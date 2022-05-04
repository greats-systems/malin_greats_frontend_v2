import {useEffect, useState, forwardRef} from 'react'
import CustomDevHero from '../ui-components/CustomDevHero'
import AppBar from '../ui-components/AppBar'
import WhatWeofferHeading from '../ui-components/Headings/WhatWeOfferHeading'
import WhatWeofferMobile from '../ui-components/WhatWeOfferMobile'
import WhatWeofferWeb from '../ui-components/WhatWeOfferWeb'
import SolutionProcessHeading from '../ui-components/Headings/SolutionProcessHeading'
import SolutionProcess from '../ui-components/SolutionProcess'
import ProjectsIntro from '../ui-components/ProjectsIntro'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useAuth from '../../hooks/useAuth';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CustomDev = () => {
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
    <CustomDevHero/>
    <WhatWeofferHeading/>
    <WhatWeofferMobile/>
    <WhatWeofferWeb/>
    <SolutionProcessHeading/>
    <SolutionProcess/>
    {/* <ProjectsIntro/> */}

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

export default CustomDev