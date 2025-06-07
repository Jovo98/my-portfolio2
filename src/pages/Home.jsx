import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import prismPattern from '../assets/prism.png';

const projects = [
    {
        id: 1,
        title: 'MY PROJECT',
        description: 'Holidaze is a modern accommodation booking application featuring both customer-facing and admin-facing functionalities.',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: 2,
        title: 'Auction Site',
        description: 'Holidaze is a modern accommodation booking application featuring both customer-facing and admin-facing functionalities.',
        image: 'https://imgur.com/MSnE9kc',
    },
    {
        id: 3,
        title: 'Holidaze',
        description: 'Holidaze is a modern accommodation booking application featuring both customer-facing and admin-facing functionalities. ',
        image: 'https://imgur.com/HYKWgPp',
    },
];

const Home = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundImage: `url(${prismPattern})`,
            backgroundRepeat: 'repeat',       // or 'no-repeat' if you want a single image
            backgroundSize: 'auto',           // or 'cover', 'contain' depending on your preference
            backgroundPosition: 'center',
            color: '#fff',                    // text color for contrast
        }} >
        <Container sx={{ paddingY: 4,  alignItems:'center' }}>
            {/* Hero Section */}
            <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }} >
                Jo Tan Vo
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Front-End Web Developer | Designer | Creator
            </Typography>
            <Typography  sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Welcome to my portfolio. Explore my projects below.
            </Typography>

            {/* Projects Teaser Cards */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{ marginTop: 6, fontFamily: 'Montserrat, sans-serif', textAlign:'center' }}
            >
                My Projects
            </Typography>
            <Grid
                container
                spacing={4}
                sx={{ marginTop: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
            >
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {project.description}
                                </Typography>
                                <Button
                                    component={Link}
                                    to={`/project/${project.id}`}
                                    variant="contained"
                                    color="primary"
                                >
                                    View Project
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </Box>
    );
};

export default Home;