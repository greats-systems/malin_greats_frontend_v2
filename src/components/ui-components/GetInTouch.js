import { Box, Container, Grid} from '@mui/material'
import GetInTouchForm from './GetInTouchForm'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: '75px',
        background: 'linear-gradient(90deg, #143B65 0%, rgba(96, 255, 92, 0.8) 100%)',
    },
    smText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#FFF'
    }, 
    lgText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '60px',
        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
        fontWeight: '600',
        fontSize: '35px',
        lineHeight: '40px',
              },
    },
    mdText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '3500',
            fontSize: '22px',
            lineHeight: '30px',
                  },
    }
}))


const GetInTouch = () => {
    const classes = useStyles();
  return (
    <Box className={classes.box}>
        <Container>
            <Grid container spacing={4}>
                <Grid item item xs={12} sm={12} md={7}>
                    <h6 className={classes.smText}>WORK WITH US</h6>
                    <h2 className={classes.lgText}>
                    Need help finding the right solution for you and your business
                    </h2>
                    <h4 className={classes.mdText}>Provide us with your details and a member of our team will be in touch to schedule a consultation call.</h4>
                </Grid>

                <Grid item item xs={12} sm={12} md={5}>
                    <GetInTouchForm/>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default GetInTouch