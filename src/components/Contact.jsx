import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                background: '#ffffff',
                borderTop: '6px solid #000',
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                    variant="h2"
                    className="glitch-text"
                    sx={{
                        textAlign: 'left',
                        mb: 6,
                        color: '#000',
                    }}
                >
                    Contact // Talk
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 8,
                        mb: 10
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 3,
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                lineHeight: 1.1
                            }}
                        >
                            Let's Build Something <span style={{ backgroundColor: '#000', color: '#fff', padding: '0 8px' }}>Epic</span>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#000',
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                mb: 4
                            }}
                        >
                            Open for collaborations, side quests, or just technical banter.
                            My inbox is always ready for a challenge.
                        </Typography>

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
                                sx={{ color: '#000', border: '4px solid #000', boxShadow: '6px 6px 0px #000', p: 2 }}
                            >
                                <GitHub sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/lokeshwar-panuganti-13511a249/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#000', border: '4px solid #000', boxShadow: '6px 6px 0px #000', p: 2 }}
                            >
                                <LinkedIn sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="mailto:panugantilokeshwar@gmail.com"
                                sx={{ color: '#000', border: '4px solid #000', boxShadow: '6px 6px 0px #000', p: 2 }}
                            >
                                <Email sx={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Stack>
                    </Box>

                    <Box sx={{ flex: 1, border: '4px solid #000', p: 4, backgroundColor: '#000', color: '#fff', boxShadow: '12px 12px 0px #000' }}>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', color: '#888' }}>Quick Links</Typography>
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Email sx={{ mr: 2 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 700 }}>panugantilokeshwar@gmail.com</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Phone sx={{ mr: 2 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 700 }}>+91 9177621222</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LocationOn sx={{ mr: 2 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 700 }}>Hyderabad, Telangana, India</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        borderTop: '6px solid #000',
                        pt: 6,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                        © {new Date().getFullYear()} LOKESHWAR PANUGANTI
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 800, mt: 1, textTransform: 'uppercase' }}>
                        No fluff. Just Code.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
