import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, Twitter } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
                bottom: 0,
                width: '100%',
                backgroundColor: '#333',
                color: '#fff',
                paddingY: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 999
            }}
        >
            <Typography variant="body2" gutterBottom>
                &copy; {new Date().getFullYear()} Jo.co. All rights reserved.
            </Typography>
            <Box>
                {/* Social Media Icons */}
                <IconButton
                    color="inherit"
                    component="a"
                    href="https://www.linkedin.com/in/jo-tan-vo-1a7330293/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    color="inherit"
                    component="a"
                    href="https://github.com/Jovo98"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    component="a"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Twitter />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;