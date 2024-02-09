import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="text-center">My Profile</h1>
      <DoctorCard />
    </Layout>
  );
};
function DoctorCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        border: "1px solid black",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://imgs.search.brave.com/9kThsbJPDITMtlyA4ZW8HgiWZOZIqc4KwrMpTcU9Qso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1h/c2lhbi1pbmRpYW4t/bWFsZS1tZWRpY2Fs/LWRvY3Rvci11bmlm/b3JtXzI1NTY2Ny00/MjE5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Dr. Mukesh Goyal</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experienced psychiatrist specializing in mental health, providing
          compassionate care for <b>2+ years</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">AVAILABLE(3:00 P.M - 7:00 P.M)</Button>
      </CardActions>
    </Card>
  );
}

export default HomePage;
