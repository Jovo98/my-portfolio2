import React from 'react';
import { Container, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import prismPattern from '../assets/prism.png';

const projects = [
    {
        id: 1,
        title: 'eCom Store',
        description: 'Ecom Store is a modern, responsive eCommerce site with product browsing, cart management, and a smooth checkout. It features a dynamic search, product details, and an optimized user experience.',
        image: 'https://i.imgur.com/vNLzx8F.png',
        link: 'https://joreact-ca.netlify.app/',
    },
    {
        id: 2,
        title: 'Auction Site',
        description: 'This project presents a auction-site application that allows users to perform core CRUD (Create, Read, Update, Delete) operations on their posts.',
        image: 'https://i.imgur.com/MSnE9kc.png',
        link: 'https://semester-project2024.vercel.app/',
    },
    {
        id: 3,
        title: 'Holidaze',
        description: 'Holidaze is a modern accommodation booking application featuring both customer-facing and admin-facing functionalities.',
        image: 'https://i.imgur.com/HYKWgPp.png',
        link: 'https://holidaze-pe.vercel.app/',
    },
];
const Home = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${prismPattern})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                color: '#fff',
            }}
        >
            <Container
                sx={{
                    paddingY: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'visible', // Keep overflow visible to prevent scrollbars
                }}
            >
                {/* Hero Section */}
                <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Jo Tan Vo
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Front-End Web Developer | Designer | Creator
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Welcome to my portfolio. Explore my projects below.
                </Typography>

                {/* Projects Header */}
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ marginTop: 6, fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}
                >
                    My Projects
                </Typography>

                {/* Projects Container - no scroll */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        paddingY: 4,

                    }}
                >
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                sx={{
                                    borderRadius: 1,
                                    position: 'relative',
                                    minWidth: 300,
                                    maxWidth: 400,
                                    cursor: 'pointer',
                                    overflow: 'visible',
                                    transition: 'transform 0.3s, z-index 0.3s',
                                    zIndex: 1,
                                    '&:hover ': {
                                        backdropFilter: 'blur(8px)',
                                        transform: 'scale(1.3)',
                                        zIndex: 10,
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // darker on hover
                                        boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                                        '& .overlay': {
                                            opacity: 1,
                                            zIndex: 20,
                                        },
                                        '& .image': {
                                            transform: 'scale(1.0)',
                                            zIndex: 1,
                                        },
                                    },
                                }}
                            >
                                {/* Image container */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 200,
                                        overflow: 'visible',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        className="image"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            transition: 'transform 0.3s ease',
                                            transformOrigin: 'center center',
                                            zIndex: 1,
                                        }}
                                        image={project.image}
                                        alt={project.title}
                                    />
                                </Box>
                                <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        marginTop: 1,
                                        marginBottom: 1,
                                        color: '#fff',
                                        padding: '4px 8px',
                                        borderRadius: 2,
                                        textAlign:'center',

                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#fff', // white for readability
                                        padding: 2,
                                        textAlign:'center',
                                    }}
                                >
                                    {project.description}
                                </Typography>
                                </Box>
                            </Box>
                        </a>
                    ))}
                </Box>
            </Container>

        </Box>
    );
};

export default Home;