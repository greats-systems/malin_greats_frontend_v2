import { Container, Grid, Box} from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '#143B65',
        borderRadius: '20px',
        padding: '30px',
        marginTop: '45px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5px',
            
              },
        
    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '25px',
        lineHeight: '30px',
        textAlign: 'center',

        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '20px',
            fontSize: '20px',
              },
    },
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '35px',
        lineHeight: '50px',
        textAlign: 'center',

        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '35px',
            fontSize: '28px',
              },
    },

}))

const VisionMission = () => {
    const classes = useStyles();
    return (
    <Container>
        <Grid container spacing={8}>
            <Grid item xs={12} md={6} >
                <Box className={classes.box}>
                <h1 className={classes.heading}>Vision</h1>
                <p className={classes.body}>To be an energy portal of Africa's greatness through technology research, development and community growth.</p>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={classes.box}>
                <h1 className={classes.heading}>Vision</h1>
                <p className={classes.body}>To be an energy portal of Africa's greatness through technology research, development and community growth.</p>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default VisionMission