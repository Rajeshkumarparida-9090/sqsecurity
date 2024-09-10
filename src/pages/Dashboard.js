// import { Box, Button, Container } from "@material-ui/core";
import {
  Grid,
  Tab,
  TableCell,
  TableRow,
  Tabs,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  tableCellClasses,
  TextField,
  Typography,
  Box, 
  Button, 
  Container
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

// import ReactApexChart from "react-apexcharts";
// import {
//   ExtraSmallText,
//   MainheadingText,
//   ,
//   SmallText,
//   SubheadingText,
// } from "../../components/Text";
// import {
//   artist_profile,
//   blankEvent,
//   event2,
//   event_1,
//   followers2,
//   followers_1,
//   revenue2,
//   revenue_1,
//   ticket2,
//   ticket_1,
// } from "../../utils/Imagepath";
import { Link } from "react-router-dom";
// import EmptyDataComponents from "../../reuseableComponents/EmptyDataComponent";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// import { artist_profile, event_1, followers_1, revenue_1, ticket_1 } from '../../utils/Imagepath'

const serie = [5000, 8000, 3000, 5000];
const option = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
      },
    },
  },
};

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    // img: artist_profile,
    text: "Temitope",
    event: "Event 1",
    date: "August 5, 2022, 7:30AM",
    amount: "+9,000.32",
    company: "Organiser",
  },
  {
    // img: artist_profile,
    text: "Temitope",
    event: "Event 2",
    date: "August 4, 2022, 4:30AM",
    amount: "+2,000.32",
    company: "Organiser",
  },
  {
    // img: artist_profile,
    text: "Temitope",
    event: "Event 3",
    date: "July 4, 2022, 7:20AM",
    amount: "+7,000.32",
    company: "Organiser",
  },
  {
    // img: artist_profile,
    text: "Temitope",
    event: "Event 4",
    date: "jan 22, 2022, 5:10AM",
    amount: "+4,000.32",
    company: "Organiser",
  },
];

const Dashboard = () => {
  const [view, setView] = useState("month");
  const [value, setValue] = React.useState("one");
  const [isKYCShow, setIsKYCShow] = useState(false);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };




  
  const event = [
    {
    //   img: event2,
      name: "Total Bookings",
      price: "121",
      color: "#7489a9",
    },
    {
    //   img: ticket2,
      name: "Upcoming Bookings",
      price: "58",
      color: "#d74242de",
    },
    {
    //   img: followers2,
      name: "Total Clients",
      price: "18",
      color: "#41afb5",
    },
    {
    //   img: revenue2,
      name: "Total Revenue",
      price: "5345.78 $",
      color: "#40b539",
    },
  ];





  return (
    <>
      <Container
        maxWidth="xl"
        className="p-3 Adashboard new-artist-dashboard"
        style={{ marginTop: "90px", position: "relative"}}
      >
        
        <p>rajesh</p>
      </Container>
      

    </>
  );
};

export default Dashboard;
