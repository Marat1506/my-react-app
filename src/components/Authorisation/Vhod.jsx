/* eslint-disable react/prop-types */
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'

export default function Vhod({ onClick }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="standard-basic" label="Адрес электронной почты" variant="standard" sx={{ width: '300px', right: '-5px' }} />
                <FormControl sx={{ m: 1, width: '280px' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button fullWidth onClick={onClick} sx={{ width: '280px' }} variant="contained">Войти</Button>
            </form>
            <p style={{marginLeft: '60px'}}>или через соцсети</p>
            <Box sx={{display: 'flex', width:"280px",  marginTop: '80px', marginLeft: '30px', marginRight: '25px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} width= "140px">
                <img width="48" height="48" src="https://img.icons8.com/color/48/vk-circled--v2.png" alt="vk-circled--v2" />
                <p>забыли пароль?</p>
                </Box>
               
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} width= "140px">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
                 <p>зарегистрироваться</p>
                </Box>
               
            </Box>


        </div>
    )
}
