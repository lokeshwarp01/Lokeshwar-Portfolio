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
                    Education // Learn
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4,
                    }}
                >
                    {education.map((edu, index) => (
                        <Paper
                            key={index}
                            className="brutalist-card"
                            sx={{
                                p: { xs: 3, sm: 4, md: 5 },
                                position: 'relative',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, backgroundColor: '#000', color: '#fff', p: 1, border: '2px solid #000' }}>
                                <School sx={{ mr: 1, fontSize: '2rem' }} />
                                <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                                    {edu.degree}
                                </Typography>
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#000',
                                    mb: 1,
                                    fontWeight: 800,
                                }}
                            >
                                {edu.institution}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#333',
                                    mb: 2,
                                    fontStyle: 'italic',
                                    fontWeight: 600
                                }}
                            >
                                {edu.university}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: '#000', fontWeight: 700 }}>
                                <CalendarToday sx={{ fontSize: '1.2rem', mr: 1 }} />
                                <Typography variant="body1">{edu.period}</Typography>
                            </Box>

                            <Chip
                                label={`GPA: ${edu.cgpa}`}
                                sx={{
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    fontWeight: 900,
                                    borderRadius: 0,
                                    fontSize: '1rem',
                                    px: 1
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
