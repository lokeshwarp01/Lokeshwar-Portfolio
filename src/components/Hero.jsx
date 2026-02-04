import React from 'react';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, KeyboardArrowDown, Download } from '@mui/icons-material';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        textAlign: 'center',
                        animation: 'fadeInUp 1s ease-out',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#b0b0b0',
                            mb: 2,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                        }}
                    >
                        Hello, I'm
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            background: 'linear-gradient(135deg, #ffffff 0%, #808080 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        }}
                    >
                        Lokeshwar Panuganti
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            color: '#e0e0e0',
                            mb: 3,
                            fontWeight: 500,
                            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
                        }}
                    >
                        Aspiring Software Engineer
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#b0b0b0',
                            maxWidth: '700px',
                            mx: 'auto',
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                    >
                        Skilled in building modern web applications with the MERN stack.
                        Passionate about creating responsive UIs and writing clean, efficient code.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        flexWrap="wrap"
                        sx={{ mb: 4 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => scrollToSection('projects')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                            }}
                        >
                            View My Work
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Download />}
                            component="a"
                            href="/LokeshwarP@16.pdf"
                            download="LokeshwarP@16.pdf"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                            }}
                        >
                            Download Resume
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                            }}
                        >
                            Contact Me
                        </Button>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        sx={{ mb: 6 }}
                    >
                        <IconButton
                            component="a"
                            href="https://github.com/lokeshwarp01"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#ffffff',
                                border: '2px solid #333333',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#ffffff',
                                    transform: 'translateY(-3px)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                },
                            }}
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/lokeshwar-panuganti-13511a249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#ffffff',
                                border: '2px solid #333333',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#ffffff',
                                    transform: 'translateY(-3px)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                },
                            }}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:panugantilokeshwar@gmail.com"
                            sx={{
                                color: '#ffffff',
                                border: '2px solid #333333',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#ffffff',
                                    transform: 'translateY(-3px)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                },
                            }}
                        >
                            <Email />
                        </IconButton>
                    </Stack>

                    <IconButton
                        onClick={() => scrollToSection('about')}
                        sx={{
                            color: '#ffffff',
                            animation: 'float 3s ease-in-out infinite',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            },
                        }}
                    >
                        <KeyboardArrowDown fontSize="large" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
