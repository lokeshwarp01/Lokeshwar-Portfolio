import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Code, Speed, Group } from '@mui/icons-material';

const About = () => {
    const highlights = [
        {
            icon: <Code fontSize="large" />,
            title: 'Clean Code',
            description: 'Writing maintainable and efficient code following best practices',
        },
        {
            icon: <Speed fontSize="large" />,
            title: 'Fast Learner',
            description: 'Quick to adapt to new technologies and frameworks',
        },
        {
            icon: <Group fontSize="large" />,
            title: 'Team Player',
            description: 'Collaborative approach in agile development environments',
        },
    ];

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 6, md: 10 },
                background: '#000000',
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '3rem' },
                    }}
                >
                    About Me
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
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 6,
                        color: '#b0b0b0',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                    }}
                >
                    Aspiring <strong style={{ color: '#ffffff' }}>Software Engineer</strong> skilled in building web applications with the{' '}
                    <strong style={{ color: '#ffffff' }}>MERN (MongoDB, Express.js, React.js, Node.js)</strong> stack.
                    Strong grasp of <strong style={{ color: '#ffffff' }}>Data Structures, Algorithms, and OOP</strong>.
                    Experienced in creating responsive UIs, integrating RESTful APIs, and using Git for version control.
                    Focused on writing clean, efficient code and collaborating in agile teams.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 3,
                    }}
                >
                    {highlights.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 4 },
                                textAlign: 'center',
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                                border: '1px solid #333333',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    borderColor: '#ffffff',
                                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    p: 2,
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '2px solid #333333',
                                    mb: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: '#ffffff',
                                    },
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
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
