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

    const allSkills = skillCategories.flatMap(c => c.skills).join(' • ');

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                background: '#ffffff',
                borderTop: '6px solid #000',
                overflow: 'hidden'
            }}
        >
            <Box className="marquee-container" sx={{ mb: 8 }}>
                <Box className="marquee-content">
                    {allSkills} • {allSkills} • {allSkills}
                </Box>
            </Box>

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
                    Stack // Skills
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4,
                    }}
                >
                    {skillCategories.map((category, index) => (
                        <Paper
                            key={index}
                            className="brutalist-card"
                            sx={{
                                p: 4,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    borderBottom: '4px solid #000',
                                    pb: 1,
                                    display: 'inline-block'
                                }}
                            >
                                {category.category}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1.5,
                                }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        label={skill}
                                        sx={{
                                            border: '2px solid #000',
                                            borderRadius: 0,
                                            fontWeight: 800,
                                            fontSize: { xs: '0.8rem', sm: '1rem' },
                                            backgroundColor: '#ffffff',
                                            '&:hover': {
                                                backgroundColor: '#000',
                                                color: '#fff'
                                            }
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
