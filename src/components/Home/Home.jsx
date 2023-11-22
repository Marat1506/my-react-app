import { Box, Typography } from "@mui/material";
import { MoodBad, SentimentDissatisfied, SentimentSatisfied, SentimentVerySatisfied, Mood } from '@mui/icons-material';
import { EmojiObjects, PlaylistAdd, LibraryBooks, HelpOutline } from '@mui/icons-material';
import afisha from './afisha.png'
export default function Home() {
    return (
        <Box id="home" sx={{display: 'flex', flexDirection: 'column', marginTop: '-70px', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>            
                <img src={afisha} alt="" width="280" height="280"/>
                <Typography sx={{ fontSize: '30px', marginTop: '-40px' }}>Привет</Typography>
                <Typography sx={{ fontSize: '30px', marginLeft: '10px' }}>Как ты себя чувствуешь?</Typography>
            </Box>

            <Box sx={{marginTop: '30px', display: 'flex', gap: '10px'}}>
                <MoodBad sx={{fontSize: '70px', color: 'red'}} fontSize="large" />
                <SentimentDissatisfied sx={{fontSize: '70px', color: 'orange'}} fontSize="large" />
                <SentimentSatisfied sx={{fontSize: '70px', color: 'yellow'}} fontSize="large" />
                <SentimentVerySatisfied sx={{fontSize: '70px', color: 'green'}} fontSize="large" />
                <Mood sx={{fontSize: '70px', color: 'chartreuse'}} fontSize="large" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <EmojiObjects sx={{ fontSize: '80px', color: 'blueviolet' }} />
                    <Typography sx={{ fontSize: '30px' }}>Мысли</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <PlaylistAdd sx={{ fontSize: '80px', color: 'blueviolet' }} />
                    <Typography sx={{ fontSize: '30px' }}>Планы</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <LibraryBooks sx={{ fontSize: '80px', color: 'blueviolet' }} />
                    <Typography sx={{ fontSize: '30px' }}>Полещные статьи</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <HelpOutline sx={{ fontSize: '80px', color: 'blueviolet'  }} />
                    <Typography sx={{ fontSize: '30px'}}>Помощь другим</Typography>
                </Box>
            </Box>
        </Box>
    )
}
