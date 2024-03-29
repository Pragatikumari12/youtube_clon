import { Box, createContext, cardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import { borderRadius } from '@mui/system';

const ChannelCard = ({ channelDetail}) => {(
    <Box
     sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto'
     }}
    >
        <Link to={'/channel/${channelDetail?.id?.channelId}'}>
            <cardContext sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', color: '#fff' }}>
            
            <cardMedia image={channelDetail?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px',width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
            <Typography variant="h6">
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount &&( <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>)}
            </cardContext>  
        </Link>
    </Box>
)
  return (
    <div>ChannelCard</div>
  )
}

export default ChannelCard