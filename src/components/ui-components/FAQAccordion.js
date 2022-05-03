import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import QuotationForm from './QuotationForm'

const useStyles = makeStyles((theme) => ({
  modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      backgroundColor: '#143B65',
      borderRadius: '10px',
      // border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'block'
      }
  }
  
}))

export default function SimpleAccordion() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <Box sx={{marginTop: {xs:'5px', md: '45px'}}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much does it cost</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pricing depends on the number of features and users you want to add. For industry specific solutions pricing starts at $100 per month. Custom solutions start from as little as $10 per month.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How long does it take to customise and install the ERP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For custom solutions it takes 24 to 48 hours depending on the number of modules. Industry solutions can take up to a week
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Can the system be used offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes the system can be used offline, however, this requires a physical system installation which comes at an additional cost
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Can you offer training on how to use the system</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer a free 3 hour training for up to 3 company employees. If you require more training please request a quotation.
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
                textDecoration:'none',
                backgroundColor: '#143B65',
                                            
                borderRadius: '45px',color: '#FFFFFF',
                padding: '10px 25px 10px 25px',
                margin: '10px 25px 10px 0px',
            }}
            // onClick={(()=> {navigate("/erp");})}
            >
                Request Quotation
            </Button>
        </AccordionDetails>
      </Accordion>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <QuotationForm/>
        </Box>
      </Modal>
    </Box>
  );
}
