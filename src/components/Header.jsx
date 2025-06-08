import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#333', }}>
                {/* Your Name or Logo */}
                <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    Jo
                </Typography>
                {/* Navigation Buttons */}
                <Box>
                    <Button color="inherit" component={Link} to="/" sx={{fontFamily: 'Montserrat, sans-serif'}}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/" sx={{fontFamily: 'Montserrat, sans-serif'}}>
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/" sx={{fontFamily: 'Montserrat, sans-serif'}}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;