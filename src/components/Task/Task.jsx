import { Box, Typography } from "@mui/material";
import { AccountCircle, AccessAlarm, Favorite, Chat } from '@mui/icons-material';

export default function Task() {
    return (
        <Box sx={{ width: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ marginTop: '-100px' }}>
                <img width="80" height="80" src="https://img.icons8.com/ios/50/swiftui.png" alt="swiftui" />
                <Typography sx={{ marginLeft: '15px' }}>Афиша</Typography>
            </Box>
            <Box sx={{ marginTop: '40px', width: '350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ borderBottom: "1px solid black" }}>
                    <Typography sx={{ marginLeft: '270px' }}>Онлайн</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Готовим вместе</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" sx={{ color: 'red' }} />
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Йога</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" />
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Как пробить стеснение</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" />
                    </Box>

                </Box>
            </Box>
            <Box sx={{ marginTop: '20px', width: '350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ borderBottom: "1px solid black" }}>
                    <Typography sx={{ marginLeft: '270px' }}>Офлайн</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Ada Lovelace</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Прогулка в </Typography>
                            <Typography>парке 18:00 </Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Mark Hopper</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Пообщаться</Typography>
                            <Typography>за ужином</Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Margaret Hamilton</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Сходить в </Typography>
                            <Typography>кино</Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
