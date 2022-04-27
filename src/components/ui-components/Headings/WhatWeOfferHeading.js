import { Box, Container} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    topBox: {
        marginTop: '350px'
    },
textPrimary: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '50px',  
    lineHeight: '50px',
    marginTop: '45px',

    display: 'flex',
    justifyContent: 'center',
    aignItems: 'center',

},
textSecondary: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',  
  lineHeight: '30px',

  display: 'flex',
  justifyContent: 'center',
  aignItems: 'center',

}
    
}))

const WhatWeofferHeading = () => {
    const classes = useStyles();

  return (
    <Box className={classes.topBox}>
        <Container>
        <h1 className={classes.textPrimary}>What We Offer</h1>
        <h4 className={classes.textSecondary}>We develop tailored web and mobile based software solutions for starts ups, SMEs and large organisations looking to achieve operational excellence. We design and engineer software for agriculture, retail, banking, manufacturing, healthcare, and other industries. Whether you are an existing business or are looking to develop and launch a software product get in touch and we’ll help you turn an idea into a reality.</h4>
        </Container>
    </Box>
  )
}

export default WhatWeofferHeading