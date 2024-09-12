import { Box, Grid, Typography } from "@mui/material";

const  UserCard = ({name,price,color})=>{
    
  return (
    <Box width="100%" p="12px 30px">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: color }}
            
          >
            {name}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: color }}
          >
            {price}
          </Typography>
        </Box>
      
      </Box>
    </Box>
  );
    }
    export default UserCard;