import { Box, Typography } from "@mui/material";
import afisha from './afisha.png'
export default function Favorite() {
  return (
    <Box sx={{width: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{marginTop: '-400px'}}>
        <img src={afisha} alt="" width="180" height="180"/>
        <Typography sx={{marginLeft: '-10px'}}>Избранное</Typography>
        </Box>
        <Typography sx={{marginTop: '40px', width: '200px', marginLeft: '-120px'}}> * Лекция {"Как побороть стеснение"} - 08.04 в 18:00</Typography>
    </Box>
  )
}
