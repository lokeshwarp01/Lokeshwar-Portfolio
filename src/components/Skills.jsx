import React from 'react';
import { Box, Container, Typography, Chip, Paper } from '@mui/material';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Java', 'Python'],
        },
        {
            category: 'Frontend',
            skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'MUI'],
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
        },
        {
            category: 'Databases',
            skills: ['MongoDB', 'MySQL', 'SQL'],
        },
        {
            category: 'Tools & Others',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Render'],
        },
        {
            category: 'Core Competencies',
            skills: ['Data Structures', 'Algorithms', 'OOP', 'API Integration', 'Debugging', 'SDLC', 'Agile Development'],
        },
    ];

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 6, md: 10 },
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
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
                    Technical Skills
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
                    {skillCategories.map((category, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, md: 3 },
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                                border: '1px solid #333333',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#ffffff',
                                    boxShadow: '0 8px 24px rgba(255, 255, 255, 0.08)',
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    borderBottom: '2px solid #333333',
                                    pb: 1,
                                }}
                            >
                                {category.category}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        label={skill}
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            color: '#ffffff',
                                            fontWeight: 500,
                                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
