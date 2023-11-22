import { Box, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { AccountCircle,  LocationOn } from '@mui/icons-material';

export default function Profil() {
  return (
    <Box id="profil" sx={{width: '350px', display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: '10px', marginTop: '-120px'}}>
      <Box>
      <img width="80" height="80" src="https://img.icons8.com/ios/50/swiftui.png" alt="swiftui" />
      <Typography sx={{fontSize: '30px'}}>Личный кабинет</Typography>
      <AccountCircle fontSize="large" sx={{fontSize: '130px', marginTop: '40px'}}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <TextField id="standard-basic" label="Имя" variant="standard" />
      <TextField id="standard-basic" label="Фамилия" variant="standard" />
      <TextField  type="date" id="standard-basic" variant="standard" />
      <TextField id="standard-basic" label="Никнейм" variant="standard" />
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Место нахождения
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <LocationOn fontSize="large" sx={{color: 'aqua'}} />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField id="standard-basic" label="Интересы" variant="standard" />
      </Box>
    </Box>
  )
}
