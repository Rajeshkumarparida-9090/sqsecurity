import { Box, useTheme, useMediaQuery, Grid, Container, TableContainer, Table, TableHead, TableRow,TableCell,
  styled,
  Typography,
  TableBody,
  Paper,tableCellClasses, } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../reuseableComponents/PageHeader";
import UserCard from "../reuseableComponents/UserCard";
import { tokens } from "../theme";
import { PieChart } from "../reuseableComponents/PieChart";
import BarChart from "./Barchat";
import Card from "../reuseableComponents/Card";
import { fetchTodo } from "../store/slice/UserSlice";
import { useDispatch,useSelector } from "react-redux";
import TableHeader from "../reuseableComponents/TableHeader";

const Dashboard = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const tabledata = useSelector((state) => state.users);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
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

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  

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
        <Box mb={2}>
        <TableHeader
          name="Users Chart"
          // btnName="Add User"
          // handelClk={handelAddForm}
        />
        </Box>
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
              {/* <Card name="Users Chart"> */}
              <PieChart width={300} height={300} />
              {/* </Card> */}
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
              
              <BarChart data={data} width={200} height={200} />
              
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
      <Container maxWidth="xl" className="p-3 Adashboard">
        <TableHeader
          name="Users List"
          // btnName="Add User"
          // handelClk={handelAddForm}
        />
        <br />
        {tabledata.isLoading ? (
          <p>LOading..........</p>
        ) : (
          <Box className="user-table position-relative">
            <TableContainer className="mt-3" component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left" className="fw-300">
                      Emp Id
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Name
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Phone Number
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Email
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Job Rule
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tabledata?.data?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.empId}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography>{row?.number}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography>{row?.email}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.role}</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Container>
      </Box>
    </>
  );
};

export default Dashboard;
