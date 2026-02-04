import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '3rem' },
                    }}
                >
                    Get In Touch
                </Typography>

                <Box
                    sx={{
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #ffffff 0%, #808080 100%)',
                        mx: 'auto',
                        mb: 6,
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                        mb: 4,
                        color: '#b0b0b0',
                        fontSize: '1.1rem',
                    }}
                >
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                    Feel free to reach out!
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 4 }}
                >
                    <IconButton
                        component="a"
                        href="https://github.com/lokeshwarp01"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#ffffff',
                            border: '2px solid #333333',
                            width: 56,
                            height: 56,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#ffffff',
                                transform: 'translateY(-5px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            },
                        }}
                    >
                        <GitHub fontSize="large" />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/lokeshwar-panuganti-13511a249/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#ffffff',
                            border: '2px solid #333333',
                            width: 56,
                            height: 56,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#ffffff',
                                transform: 'translateY(-5px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            },
                        }}
                    >
                        <LinkedIn fontSize="large" />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="mailto:panugantilokeshwar@gmail.com"
                        sx={{
                            color: '#ffffff',
                            border: '2px solid #333333',
                            width: 56,
                            height: 56,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#ffffff',
                                transform: 'translateY(-5px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            },
                        }}
                    >
                        <Email fontSize="large" />
                    </IconButton>
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        mb: 6,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0' }}>
                        <Email sx={{ mr: 1 }} />
                        <Typography variant="body1">panugantilokeshwar@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0' }}>
                        <Phone sx={{ mr: 1 }} />
                        <Typography variant="body1">+91 9177621222</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0' }}>
                        <LocationOn sx={{ mr: 1 }} />
                        <Typography variant="body1">Hyderabad, Telangana, India</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        borderTop: '1px solid #333333',
                        pt: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#808080' }}>
                        © {new Date().getFullYear()} Lokeshwar Panuganti. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#808080', mt: 1 }}>
                        Built with React & Material-UI
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
