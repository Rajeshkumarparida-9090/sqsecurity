import { Box, Grid, Typography } from "@mui/material";

const  Card = ({name,children})=>{
    
  return (
    <Box width="100%" p="12px 30px">
      <Box>
        <Box >
          <Typography
            variant="h4"
            fontWeight="bold"  
          >
            {name}
          </Typography>
          
        </Box>
      
      </Box>
      {children}
    </Box>
  );
    }
    export default Card;