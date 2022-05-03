import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import ProblemSolving from '../../assets/problem-solving 1.svg'
import Seo from '../../assets/seo 1.svg'
import Bulb from '../../assets/bulb 1.svg'
import Rating from '../../assets/rating 1.svg'
import United from '../../assets/united 1.svg'



import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        // minHeight: '90vh',
        maxHeight: '80vh',
        backgroundColor: '#FFF',
        marginBottom: '75px'
    },
    img: {
        width: '85%',
        marginLeft: '25px',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'0px',
        width: '50%',
            marginTop: '0px',
            marginLeft: '80px'

        }
    },
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '40px',
        lineHeight: '25px',
        display: 'flex',
        justifyContent: 'flex-start',

        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-35px',
            width: '110%',
            lineHeight: '30px',
            fontSize: '30px',
            textAlign: 'center'
              },
    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '25px',
        lineHeight: '30px',
        display: 'flex',
        justifyContent: 'flex-start',

        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15px',
            width: '100%',
            lineHeight: '28px',
            fontSize: '22px',
              },
    },
    
}))


const AboutUsValues = () => {
    const classes = useStyles();
    return (
    <Container>
        <Grid container spacing={8} >
            <Grid item xs={12} md={3}>
                <Box>
                    <img className={classes.img} src={ProblemSolving} alt=""/>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{paddingLeft: {xs:'5px', lg:'95'}}}>
                    <h3 className={classes.heading}>Problem Solving</h3>
                    <p className={classes.body}>We are always looking for solutions to specific problems that are faced by business communities.</p>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={8} sx={{marginTop:'25px'}}>
            <Grid item xs={12} md={3}>
                <Box>
                    <img className={classes.img} src={Seo} alt=""/>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{paddingLeft: {xs:'5px', lg:'95'}}}>
                    <h3 className={classes.heading}>Research</h3>
                    <p className={classes.body}>To meet our customers needs we are always learning about them and how we can provide technology that can better their lives.</p>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={8} sx={{marginTop:'25px'}}>
            <Grid item xs={12} md={3}>
                <Box>
                    <img className={classes.img} src={Bulb} alt=""/>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{paddingLeft: {xs:'5px', lg:'95'}}}>
                    <h3 className={classes.heading}>Innovation</h3>
                    <p className={classes.body}>We encourage out of the box thinking to tackle the challenges faced by Africa society</p>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={8} sx={{marginTop:'25px'}}>
            <Grid item xs={12} md={3}>
                <Box>
                    <img className={classes.img} src={Rating} alt=""/>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{paddingLeft: {xs:'5px', lg:'95'}}}>
                    <h3 className={classes.heading}>Customer Experience</h3>
                    <p className={classes.body}>We strive to make a positive difference in our customers' lives and exceed their expectations with every project.</p>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={8} sx={{marginTop:'25px'}}>
            <Grid item xs={12} md={3}>
                <Box>
                    <img className={classes.img} src={United} alt=""/>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{paddingLeft: {xs:'5px', lg:'95'}}}>
                    <h3 className={classes.heading}>Teamwork</h3>
                    <p className={classes.body}>We work together to meet the needs of our clients as our success depends on the collective effort of all of our team members.</p>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default AboutUsValues