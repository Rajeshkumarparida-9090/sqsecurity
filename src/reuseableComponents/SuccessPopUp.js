import React from "react";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

const SuccessPopup = ({ message }) => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifiContent: "end", alignItems: "center" }}
        style={{
          position: "absolute",
          right: "10px",
          top: "50px",
          width: "300px",
        }}
      >
        <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Box>
    </>
  );
};
export default SuccessPopup;
