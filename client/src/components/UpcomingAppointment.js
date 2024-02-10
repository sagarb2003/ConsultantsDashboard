import React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const UpcomingAppointment = () => {
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
            Soniya (Id -1649)
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#f9f9f9",
              padding: "16px",
              textAlign: "justify",
            }}
          >
            Appointment on 10/2/24 at 5:45 P.M
            {/* <a href="http://localhost:3000/">Video Call</a> */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                marginLeft: "21px",
                padding: "5px",
              }}
            >
              Video Call
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
            Suraj (Id -1562)
          </AccordionSummary>
          <AccordionDetails>
            Appointment on 10/2/24 at 4:30 P.M.
            {/* <a href="http://localhost:3000/">Video Call</a> */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
            >
              Video Call
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
            Vinay (Id -2220)
          </AccordionSummary>
          <AccordionDetails>
            Appointment on 11/2/24 at 5:25 P.M
            {/* <a href="http://localhost:3000/">Video Call</a> */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
            >
              Video Call
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default UpcomingAppointment;
