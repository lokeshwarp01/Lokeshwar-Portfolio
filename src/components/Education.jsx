import React from 'react';
import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { School, CalendarToday } from '@mui/icons-material';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'R.V.R. & J.C. College of Engineering, Guntur',
            university: 'Acharya Nagarjuna University',
            period: '2023 – 2025',
            cgpa: '7.90 / 10',
        },
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            institution: 'JKC College, Guntur',
            university: 'Acharya Nagarjuna University',
            period: '2020 – 2023',
            cgpa: '7.91 / 10',
        },
    ];

    return (
        <Box
            id="education"
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
                    Education
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

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3,
                    }}
                >
                    {education.map((edu, index) => (
                        <Paper
                            key={index}
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
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <School sx={{ mr: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {edu.degree}
                                </Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#e0e0e0',
                                    mb: 1,
                                    fontWeight: 500,
                                }}
                            >
                                {edu.institution}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#b0b0b0',
                                    mb: 2,
                                    fontStyle: 'italic',
                                }}
                            >
                                {edu.university}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#b0b0b0' }}>
                                <CalendarToday sx={{ fontSize: '1rem', mr: 0.5 }} />
                                <Typography variant="body2">{edu.period}</Typography>
                            </Box>

                            <Chip
                                label={`CGPA: ${edu.cgpa}`}
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    fontWeight: 600,
                                }}
                            />
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Education;
