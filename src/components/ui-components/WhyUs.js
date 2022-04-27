import {Box, Container, Grid} from '@mui/material'
import CleanUI from '../../assets/clean-ui.svg'
import DedicatedTeam from '../../assets/dedicated-team.svg'
import Secure from '../../assets/secure.svg'
import UserOriented from '../../assets/user-oriented.svg'


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
text: {
  color: '#FFF',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',  
  lineHeight: '35px', 
  textAlign: 'left',
//   display: 'inline',
  marginLeft: '20px'

},
title: {
    paddingTop: '45px',
  color: '#FFF',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '40px',  
  lineHeight: '45px', 
  textAlign: 'left',
  width: '50%'
},
img: {
  width: '35px',
  backgroundColor: '#60FF5C',
  borderRadius: '50%',
  padding: '8px',
  marginTop: '15px'
},
box: {
    marginBottom: '45px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
}


    
}))

const WhyUs = () => {
    const classes = useStyles();
    return (
    <Box sx={{backgroundColor: '#143B65'}}>
        <Container>
        <h1 className={classes.title}>Always ready to deliver the best solution for you and your business</h1>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box className={classes.box}><img className={classes.img} src={CleanUI} alt=""/> <h2 className={classes.text}>Clean UX/UI</h2> </Box>
            </Grid>
            <Grid item xs={6}>
            <Box className={classes.box}><img className={classes.img} src={UserOriented} alt=""/> <h2 className={classes.text}>User Oriented Approach</h2> </Box>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box className={classes.box}><img className={classes.img} src={Secure} alt=""/> <h2 className={classes.text}>Secure Systems</h2> </Box>
            </Grid>
            <Grid item xs={6}>
            <Box className={classes.box}><img className={classes.img} src={DedicatedTeam} alt=""/> <h2 className={classes.text}>Dedicated Team</h2> </Box>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default WhyUs