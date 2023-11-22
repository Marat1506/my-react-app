import { Box, Typography } from "@mui/material";

export default function Favorite() {
  return (
    <Box sx={{width: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{marginTop: '-400px'}}>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/swiftui.png" alt="swiftui" />
        <Typography sx={{marginLeft: '-10px'}}>Избранное</Typography>
        </Box>
        <Typography sx={{marginTop: '40px', width: '200px', marginLeft: '-120px'}}> * Лекция {"Как побороть стеснение"} - 08.04 в 18:00</Typography>
    </Box>
  )
}
