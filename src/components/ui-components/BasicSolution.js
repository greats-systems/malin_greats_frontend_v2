import { Box, Button, Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';



const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#60FF5C',
        borderRadius: '10px',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '25px',
        marginTop: '35px',
        margin: 'auto',
        lineHeight: '30px',
        color: '#000',
        textTransform: 'none',
    
    },
 heading: {
    paddingTop: '75px',
     fontFamily: 'Manrope',
     fontWeight: '800',
     fontSize: '50px',
     textAlign: 'center',
     color: '#FFFFFF',
     
 },
 text: {
    paddingTop: '5px ',
     fontFamily: 'Manrope',
     fontWeight: '500',
     fontSize: '20px',
     textAlign: 'center',
     color: '#FFFFFF',
     
 },
 card:{
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '25px',
    marginBottom: '20px'
 },
 listHeading: {
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: '35px',
    lineHeight: '15px',
    color: '#143B65',
},
list: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: '20px',
    margin: '5px',
    color: '#000',
    textAlign: 'left'
},

}))



const BasicSolution = () => {
    const classes = useStyles();
  return (
    <Box sx={{backgroundColor: '#143B65', paddingTop: '85px', paddingBottom: '50px', width: '100%', height: '100%'}}>
    
            <h3 className={classes.heading}>Basic $8*</h3>
            <h6 className={classes.text}>Simple modules to run everyday finacial aspects of ypur business. <br/>*$8 per month for 1 user</h6>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Accounts</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Journals and Payments</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Billings and Invoices</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Pricing</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Taxes</h6>
                </Box>
                </Grid>
                <Grid item xs={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Accounts</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Journals and Payments</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Billings and Invoices</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Pricing</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Taxes</h6>
                </Box>
                </Grid>
                <Grid item xs={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Accounts</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Journals and Payments</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Billings and Invoices</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Pricing</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Taxes</h6>
                </Box>
                </Grid>
            </Grid>

            <Button variant='contained'
            // className={classes.button}
            sx={{
            display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#60FF5C',
        borderRadius: '10px',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '20px',
        marginTop: '45px',
        margin: 'auto',
        lineHeight: '30px',
        color: '#000',
        textTransform: 'none',
        }}
            >
                Build Your Solution
            </Button>
    </Box>
  )
}

export default BasicSolution