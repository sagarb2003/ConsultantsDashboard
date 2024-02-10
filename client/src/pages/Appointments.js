import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
// import { Table } from "antd";
import PreviousAppointment from "../components/PreviousAppointment";
import UpcomingAppointment from "../components/UpcomingAppointment";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text, record) => (
    //     <span>
    //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    // },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <Layout>
      <h1>Appointments Lists</h1>
      <h4 style={{ textAlign: "center" }}>Upcoming Appointments</h4>
      <UpcomingAppointment />
      <h4 style={{ textAlign: "center" }}>Previous Appointments</h4>
      <PreviousAppointment />
      {/* <Table columns={columns} dataSource={appointments} /> */}
    </Layout>
  );
};

// function DisplayAppointment() {
//   return (
//     <div style={{ marginTop: "30px", marginLeft: "7px", marginRight: "7px" }}>
//       <Accordion sx={{ border: "1px solid black" }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "25px",
//             color: "blue",
//           }}
//         >
//           Sheetal (Id -2481)
//         </AccordionSummary>
//         <AccordionDetails
//           sx={{
//             backgroundColor: "#f9f9f9",
//             padding: "16px",
//             textAlign: "justify",
//           }}
//         >
//           Sheetal has taken an appointment on 8/2/24, expressing a proactive
//           approach towards addressing mental health concerns.
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#4caf50",
//               marginLeft: "21px",
//               padding: "5px",
//             }}
//           >
//             Track Progress
//           </Button>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion sx={{ border: "1px solid black" }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//           sx={{ fontWeight: "bold", fontSize: "25px", color: "blue" }}
//         >
//           Pankaj (Id -2482)
//         </AccordionSummary>
//         <AccordionDetails>
//           Pankaj has taken an appointment on 9/2/24, expressing Confused
//           thinking or reduced ability to concentrate
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
//           >
//             Track Progress
//           </Button>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion sx={{ border: "1px solid black" }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//           sx={{ fontWeight: "bold", fontSize: "25px", color: "blue" }}
//         >
//           Rama (Id -2483)
//         </AccordionSummary>
//         <AccordionDetails>
//           Rama has taken an appointment on 9/2/24, expressing Extreme mood
//           changes of highs and lows
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#4caf50", marginLeft: "21px" }}
//           >
//             Track Progress
//           </Button>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

export default Appointments;
