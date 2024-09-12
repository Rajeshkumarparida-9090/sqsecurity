import { Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../reuseableComponents/PageHeader";
import UserCard from "../reuseableComponents/UserCard";
import { tokens } from "../theme";
import { PieChart } from "../reuseableComponents/PieChart";
import BarChart from "./Barchat";

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
  const data = [
    { name: "A", value: 30 },
    { name: "B", value: 80 },
    { name: "C", value: 45 },
    { name: "D", value: 60 },
    { name: "E", value: 20 },
    { name: "F", value: 90 },
    { name: "G", value: 55 },
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

        <Grid container spacing={2} marginBottom="10px">
          {usersList.map((ele, index) => {
            return (
              <>
                <Grid item xs={12} lg={3} md={6} sm={6}>
                  <Box
                    width="100%"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    sx={{ marginBottom: "10px" }}
                  >
                    <UserCard
                      color={ele?.color}
                      name={ele?.name}
                      price={ele?.price}
                    />
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              sx={{ marginBottom: "10px" }}
            >
              <PieChart width={300} height={300} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              sx={{ marginBottom: "10px" }}
            >
              <BarChart data={data} width={300} height={300} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
