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
                background: '#ffffff',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.1,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h6"
                        className="crazy-float"
                        sx={{
                            color: '#000000',
                            mb: 2,
                            fontWeight: 900,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            display: 'inline-block',
                            px: 2,
                            py: 0.5,
                            border: '3px solid #000000',
                        }}
                    >
                        Hello, I'm
                    </Typography>

                    <Typography
                        variant="h1"
                        className="glitch-text"
                        sx={{
                            fontWeight: 900,
                            mb: 1,
                            color: '#000000',
                            fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
                            lineHeight: 0.9,
                            cursor: 'default',
                        }}
                    >
                        Lokeshwar<br />Panuganti
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            color: '#000000',
                            mb: 4,
                            fontWeight: 800,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                            textTransform: 'uppercase',
                        }}
                    >
                        Software Engineer
                    </Typography>

                    <Box
                        sx={{
                            borderLeft: '10px solid #000000',
                            pl: 3,
                            mb: 6,
                            maxWidth: '700px'
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#333333',
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                fontWeight: 600,
                                lineHeight: 1.4,
                            }}
                        >
                            I build high-performance web applications using the MERN stack.
                            Clean code. Bold designs. Relentless execution.
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        alignItems="flex-start"
                        sx={{ mb: 6, width: '100%' }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => scrollToSection('projects')}
                            sx={{
                                px: 5,
                                py: 2,
                                fontSize: '1.2rem',
                                width: { xs: '100%', sm: 'auto' },
                            }}
                        >
                            Exploration
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Download />}
                            component="a"
                            href="/LokeshwarP@16.pdf"
                            download="Lokeshwar_Panuganti.pdf"
                            sx={{
                                px: 5,
                                py: 2,
                                fontSize: '1.2rem',
                                width: { xs: '100%', sm: 'auto' },
                            }}
                        >
                            The Resume
                        </Button>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ mb: 4 }}
                    >
                        <IconButton
                            component="a"
                            href="https://github.com/lokeshwarp01"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#000' }}
                        >
                            <GitHub fontSize="large" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/lokeshwar-panuganti-13511a249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#000' }}
                        >
                            <LinkedIn fontSize="large" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:panugantilokeshwar@gmail.com"
                            sx={{ color: '#000' }}
                        >
                            <Email fontSize="large" />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    right: 40,
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <IconButton
                    onClick={() => scrollToSection('about')}
                    sx={{
                        color: '#000000',
                        animation: 'bounce-subtle 2s infinite',
                        border: '4px solid #000',
                        boxShadow: '6px 6px 0px #000'
                    }}
                >
                    <KeyboardArrowDown fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Hero;
