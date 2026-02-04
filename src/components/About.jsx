import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Code, Speed, Group } from '@mui/icons-material';

const About = () => {
    const highlights = [
        {
            icon: <Code sx={{ fontSize: '3rem' }} />,
            title: 'Clean Code',
            description: 'Writing maintainable and efficient code following best practices',
        },
        {
            icon: <Speed sx={{ fontSize: '3rem' }} />,
            title: 'Fast Learner',
            description: 'Quick to adapt to new technologies and frameworks',
        },
        {
            icon: <Group sx={{ fontSize: '3rem' }} />,
            title: 'Team Player',
            description: 'Collaborative approach in agile development environments',
        },
    ];

    return (
        <Box
            id="about"
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
                        mb: 4,
                        color: '#000',
                    }}
                >
                    About // Me
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
                            variant="body1"
                            sx={{
                                color: '#000',
                                fontSize: '1.25rem',
                                lineHeight: 1.6,
                                mb: 3,
                            }}
                        >
                            I'm a <strong style={{ textDecoration: 'underline', textDecorationThickness: '4px' }}>Software Engineer</strong> who doesn't settle for "good enough."
                            I specialize in the <strong style={{ backgroundColor: '#000', color: '#fff', padding: '0 4px' }}>MERN Stack</strong>.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.1rem' }}>
                            Strong foundations in Data Structures, Algorithms, and OOP.
                            I build interfaces that are fast, accessible, and impossible to ignore.
                            If it's interactive, I've likely tried to break it to make it better.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, backgroundColor: '#000', color: '#fff', p: 4, border: '4px solid #000', boxShadow: '12px 12px 0px #000' }}>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, textTransform: 'uppercase' }}>Current Mission:</Typography>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
                            "To engineer software that solves complex problems with elegant, efficient, and robust architecture."
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4,
                    }}
                >
                    {highlights.map((item, index) => (
                        <Paper
                            key={index}
                            className="brutalist-card"
                            sx={{
                                p: 4,
                                height: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    mb: 3,
                                    color: '#000'
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 900 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#000' }}>
                                {item.description}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default About;
