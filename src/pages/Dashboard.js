import {
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
    Grid,
    Grid2,
  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

// import ReactApexChart from "react-apexcharts";


import { Link } from "react-router-dom";
// import EmptyDataComponents from "../../reuseableComponents/EmptyDataComponent";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PageHeader from "../reuseableComponents/PageHeader";
import UserCard from "../reuseableComponents/UserCard";
import { tokens } from "../theme";
import HorizontalBarChart from "../reuseableComponents/HorizontalBarChart";
import { PieChart } from "../reuseableComponents/PieChart";




const Dashboard = () => {
    const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
const usersList = [
    {
      name: "Total Bookings",
      price: "121",
      color: "#7489a9",
    },
    {
      name: "Upcoming Bookings",
      price: "58",
      color: "#d74242de",
    },
    {
      name: "Total Clients",
      price: "18",
      color: "#41afb5",
    },
    {
      name: "Total Revenue",
      price: "5345.78 $",
      color: "#40b539",
    },
  ];

  return (
    <>
    
    <Box m="20px">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <PageHeader title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <hr />

      {/* <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
        <Box
        // display="flex"
        // justifyContent="space-between"
        // width= "100%"
        // height= "100%"
        sx={{
           gridGap: "10px",
           marginBottom:"10px"
        }}
        >
      {usersList.map((ele,index)=>{
                return(
                    <>
        {/* <Grid2 size={{xs:12, sm:12, md:6, lg:3, xl:3}} sx={{width:"100%"}}> */}
        <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            // display="flex"
            // alignItems="center"
            // justifyContent="center"
            height="100%"
            sx={{marginBottom:"10px"}}
          >
           
            <UserCard color={ele?.color} name={ele?.name} price={ele?.price} /> 
                 
        </Box>
        {/* </Grid2> */}
        </>
                )
            })}
            </Box>
        {/* </Grid2> */}
        <Box
    width="100%"
    backgroundColor={colors.primary[400]}
    // display="flex"
    // alignItems="center"
    // justifyContent="center"
    height="100%"
    sx={{marginBottom:"10px"}}
    >
        {/* <HorizontalBarChart /> */}
        <PieChart width={300} height={300} />
    </Box>
        
    </Box>
    
      

    </>
  );
};

export default Dashboard;
