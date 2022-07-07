import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./filter.css"
export default function SimpleAccordion() {

    return (

        <div className='AccodianMain'>
            
            <h3 className='AccodianMainHead'>FILTER</h3>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='Accodtitle'>Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>Men</li>
                        <li className='Acordli'>Women</li>
                        <li className='Acordli'>Unisex</li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='Accodtitle' >Sizes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>XS</li>
                        <li className='Acordli'>S</li>
                        <li className='Acordli'>M</li>
                        <li className='Acordli'>L</li>
                        <li className='Acordli'>XL</li>
                        <li className='Acordli'>2XL</li>
                        <li className='Acordli'>3XL</li>
                        <li className='Acordli'>4XL</li>
                        <li className='Acordli'>5XL</li>
                        <li className='Acordli'>6XL</li>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='Accodtitle'>Fit</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>Regular</li>
                        <li className='Acordli'>Oversized</li>
                        <li className='Acordli'>Slim Fit</li>
                        <li className='Acordli'>Unisex</li>
                        <li className='Acordli'>Relaxed Fit</li>
                        <li className='Acordli'>Loose Fit</li>
                        <li className='Acordli'>Super Loose</li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='Accodtitle'>Ratings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>4.5 and above</li>
                        <li className='Acordli'>4 and above</li>
                        <li className='Acordli'>3.5 and above</li>
                        <li className='Acordli'>3 and above</li>
                        <li className='Acordli'>2.5 and above</li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='Accodtitle'>Discount</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>10% Or More</li>
                        <li className='Acordli'>20% Or More</li>
                        <li className='Acordli'>30% Or More</li>
                        <li className='Acordli'>40% Or More</li>
                        <li className='Acordli'>50% Or More</li>
                        <li className='Acordli'>60% Or More</li>
                        <li className='Acordli'>70% Or More</li>
                        <li className='Acordli'>80% Or More</li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='Accodtitle' >Sort By</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li className='Acordli'>Popular</li>
                        <li className='Acordli'>New</li>
                        <li className='Acordli'>Price:High to Low</li>
                        <li className='Acordli'>Price:Low to High</li>
                    </Typography>
                </AccordionDetails>

            </Accordion>



        </div>
    );
}
