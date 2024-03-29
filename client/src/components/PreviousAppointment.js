import React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
// import PreviousAppointment from "../components/PreviousAppointment";


const PreviousAppointment = () => {
  return (
    <>
      <div style={{ marginTop: "30px", marginLeft: "7px", marginRight: "7px" }}>
        <Accordion sx={{ border: "1px solid black" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "blue",
            }}
          >
            Sheetal (Id -2481)
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#f9f9f9",
              padding: "16px",
              textAlign: "justify",
            }}
          >
            Sheetal has taken an appointment on 8/2/24, expressing a proactive
            approach towards addressing mental health concerns.
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                marginLeft: "21px",
                padding: "5px",
              }}
            >
              Track Progress
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: "1px solid black" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ fontWeight: "bold", fontSize: "25px", color: "blue" }}
          >
            Pankaj (Id -2482)
          </AccordionSummary>
          <AccordionDetails>
            Pankaj has taken an appointment on 9/2/24, expressing Confused
            thinking or reduced ability to concentrate
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
            >
              Track Progress
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: "1px solid black" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ fontWeight: "bold", fontSize: "25px", color: "blue" }}
          >
            Rama (Id -2483)
          </AccordionSummary>
          <AccordionDetails>
            Rama has taken an appointment on 9/2/24, expressing Extreme mood
            changes of highs and lows
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
            >
              Track Progress
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default PreviousAppointment;
