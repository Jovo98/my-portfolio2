import React from 'react';
import {  Box, Typography} from '@mui/material';
import prismPattern from '../assets/prism.png';



const About = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundImage: `url(${prismPattern})`,
            backgroundRepeat: 'repeat',       // or 'no-repeat' if you want a single image
            backgroundSize: 'auto',           // or 'cover', 'contain' depending on your preference
            backgroundPosition: 'center',
            color: '#fff',                    // text color for contrast
        }} >
            <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>ABOUT ME</Typography>
        </Box>
    );
};

export default About;