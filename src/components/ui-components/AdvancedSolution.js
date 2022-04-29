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
     [theme.breakpoints.down('sm')]: {
        fontWeight: '600',
      fontSize: '35px',  
      lineHeight: '40px',
      marginTop: '45px',
      }
     
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



const AdvancedSolution = () => {
    const classes = useStyles();
  return (
    <Box sx={{backgroundColor: '#143B65', paddingTop: '85px', paddingBottom: '50px', width: '100%', height: '100%'}}>
    
            <h3 className={classes.heading}>Advanced($20*)</h3>
            <h6 className={classes.text}>Tools to simplify complex processes within your business.<br/>*$20 per month for 1 user</h6>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Assets</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Asset Record</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Maintenance Records</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Depreciation</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Tracking</h6>
                    {/* <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Email Markerting</h6> */}
                </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Loan</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Loan Disbursment</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Interest Accrual</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Repayment</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Loan Wire Off</h6>
                    {/* <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>HR Reports</h6> */}
                </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Box className={classes.card}>
                    <h2 className={classes.listHeading}>Support</h2>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Customer Requests</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Support Tickets</h6>
                    <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Maintenance Schedules</h6>
                    {/* <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Budget Management</h6> */}
                    {/* <h6 className={classes.list}><CircleIcon sx={{fontSize: '12px', paddingRight: '10px'}}/>Customer Portal</h6> */}
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

export default AdvancedSolution