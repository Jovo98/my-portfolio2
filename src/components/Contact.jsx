import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import prismPattern from "../assets/prism.png";
const Contact = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${prismPattern})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                color: '#fff',
                p: 4,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }} gutterBottom>
                <Typography variant="h2">Get In Touch</Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    margin: 8,
                }}
            >
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography variant="h4" gutterBottom>
                        Contact Information
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon sx={{ mr: 1 }} />
                        <Typography>jotanvo@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography>+47 469453040</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ mr: 1 }} />
                        <Typography>Oslo, Norge</Typography>
                    </Box>
                </Box>

                <Box component="form"  sx={{
                    maxWidth: 400,
                    width: '100%',
                    backgroundColor: 'rgb(255,255,255)',
                    padding: 4,
                    borderRadius: '16px',
                }}>
                    <Typography variant="h4" gutterBottom sx={{textAlign:'center', color:'black'}}>
                        Send a Message
                    </Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button type="submit" variant="contained"  color="secondary" sx={{ mt: 2, width:"100%",}}>
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );



}

export default Contact;