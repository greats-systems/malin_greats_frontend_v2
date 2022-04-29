import {Grid, Box, Container} from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    topBox: {
        marginTop: '75px',
        paddingBottom: '45px',
        backgroundColor: '#143B65',
    },
    title: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '100px',
        color: '#FFF',
        display: 'inline',
        // marginBottom: '15px',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '600',
            fontSize: '35px',
            lineHeight: '70px',
              },
    }, 
    text: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '30px',
        // lineHeight: '60px',
        margin: '5px',
        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '380',
            fontSize: '18px',
            // lineHeight: '70px',
              },

    },
}))

const ContactInfo = () => {
    const classes = useStyles();
    return (
    <Box className={classes.topBox}>
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <h1 className={classes.title}>Contact Us </h1> <PermContactCalendarIcon sx={{fontSize: {xs: '35px', md: '50px'}, color: '#60FF5C', display: 'inline'}}/>
                    <h4 className={classes.text}>sales@malingreatssmartssytems.co.zw</h4>
                    <h4 className={classes.text}>+263777757603</h4>
                    <h4 className={classes.text}>+263712573552</h4>
                </Grid>
                <Grid item xs={12} md={5}>
                    <h1 className={classes.title}>Find Us</h1> <LocationOnIcon sx={{fontSize: {xs: '35px', md: '50px'}, color: '#60FF5C', display: 'inline'}}/>
                    <h4 className={classes.text}>7th Floor Heritage House</h4>
                    <h4 className={classes.text}>67 Samora Matchel,</h4>
                    <h4 className={classes.text}>Harare, Zimbabwe</h4>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default ContactInfo