import Nav from "../components/nav/nav";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from "../components/footer";

export default function Services() {
    return (
      <div className="services">
        <Nav />
        <h1 className="page-title">Services</h1>
        <div className="services-accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">Performance</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography className="accordion-description">
                
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">Wheels & Rims</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography className="accordion-description">
                Looking to accent your vehicle with an awesome set of tires and rims? Here at Regiment, we sell 
                numerous lines to make sure you get that perfect look!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">Powder Coating</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography className="accordion-description">
              Powder coating is a dry finishing process that has become extremely popular since its introduction in 
              North America over in the 1960s. Powdercoating offers a sense of security due to its rigidity and durability!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">Automotive Customization & Up-Fitting</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography className="accordion-description">
              
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">Builds & Restorations</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography className="accordion-description">
                Here at Regiment, we work to restore your antique to a like-new condition or preserving an 
                antique against further deterioration as in conservation.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Footer />
      </div>
    )
}