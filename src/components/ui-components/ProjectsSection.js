import { Container, Grid } from '@mui/material'
import { ArrowForwardIcon } from '@mui/icons-material'


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
text: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',  
  lineHeight: '35px', 
  textAlign: 'left'
},
name: {
  color: '#000000',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',  
  lineHeight: '30px', 
  textAlign: 'left'
},
title: {
  color: '#64607D',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '17px',  
  lineHeight: '30px', 
  textAlign: 'left'
},
img: {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
},
box: {
    backgroundColor: '#143B65 !important',
}

    
}))


const ProjectsSection = () => {
    const classes = useStyles();
    return (
    <Container>
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <h4 className={classes.mdText}>WEB APPLICATION</h4>
                    <h2 className={classes.lgText}>Project Name</h2>
                    <h6 className={classes.smText}>Tgvg hj jh kjb lojk ljnpwinx oewubcnojec oecibnejc juc ju j ebi d oeucndj jecb oeuc odc owicnjdc eoicnjdc elc. eihcbeiuc ekijcej b icbfiueb </h6>
                    <Button
                        variant="contained"
                        sx={{
                            color: '#000',
                            backgroundColor: '#FFF',

                        }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Read More
                    </Button>
                </Grid>
                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    </Container>
  )
}

export default ProjectsSection