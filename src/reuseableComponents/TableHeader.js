import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TableHeader = ({name,btnName,handelClk})=>{
    return(
        <Box className='' display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant='h2'><b>{name}</b></Typography>
            <Button variant="contained" onClick={handelClk}>{btnName}</Button>
        </Box>
    )
}
export default TableHeader;