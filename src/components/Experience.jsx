import React from 'react';
import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';

const Experience = () => {
    const experience = {
        title: 'Student Intern',
        company: 'TechU Innovation Labs',
        location: 'Madhapur, Hyderabad, Telangana',
        period: 'June 2025 – Present',
        achievements: [
            'Developed and deployed the frontend for Wok AI, a healthcare web application enabling online doctor consultations',
            'Built responsive layouts using React.js and Tailwind CSS, improving cross-device performance by 25%',
            'Integrated RESTful APIs (Representational State Transfer) and optimized React Hooks for efficient state management',
            'Collaborated with backend team using Node.js and Express.js to ensure seamless API communication',
            'Enhanced reusability and debugging workflows, reducing frontend maintenance time by 15%',
        ],
    };

    return (
        <Box
            id="experience"
            sx={{
                py: 10,
                background: '#000000',
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
                    Experience
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

                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                        border: '1px solid #333333',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            borderColor: '#ffffff',
                            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            background: 'linear-gradient(180deg, #ffffff 0%, #808080 100%)',
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Work sx={{ mr: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {experience.title}
                        </Typography>
                        <Chip
                            label="Current"
                            size="small"
                            sx={{
                                ml: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#ffffff',
                                fontWeight: 600,
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#e0e0e0',
                            mb: 2,
                            fontWeight: 500,
                        }}
                    >
                        {experience.company}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0' }}>
                            <CalendarToday sx={{ fontSize: '1rem', mr: 0.5 }} />
                            <Typography variant="body2">{experience.period}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0' }}>
                            <LocationOn sx={{ fontSize: '1rem', mr: 0.5 }} />
                            <Typography variant="body2">{experience.location}</Typography>
                        </Box>
                    </Box>

                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {experience.achievements.map((achievement, index) => (
                            <Box
                                component="li"
                                key={index}
                                sx={{
                                    color: '#b0b0b0',
                                    mb: 1.5,
                                    lineHeight: 1.7,
                                    '&::marker': {
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                <Typography variant="body1">{achievement}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Experience;
