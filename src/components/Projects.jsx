import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform (Meshop)',
            description: 'Built a responsive e-commerce platform with cart and checkout functionality using React.js. Implemented dynamic routing with React Router and lazy loading, reducing load times by 20%.',
            technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://lokeshwarp01.github.io/meshop/',
            githubUrl: 'https://github.com/lokeshwarp01/meshop.git',
            highlights: [
                'Dynamic routing with React Router',
                'Lazy loading for 20% faster load times',
                'Cart and checkout functionality',
                'Manual testing with Postman',
            ],
        },
        {
            title: 'Full-Stack News Management System (DailyN)',
            description: 'Built a full-stack role-based news portal with dashboards for admins and users. Designed secure REST APIs with JWT authentication and granular access control for data integrity.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
            liveUrl: 'https://dailyns.netlify.app/',
            frontendUrl: 'https://github.com/lokeshwarp01/DialyN_frontend.git',
            backendUrl: 'https://github.com/lokeshwarp01/DialyN_backend.git',
            highlights: [
                'Role-based access control',
                'JWT authentication',
                'Cloudinary image uploads',
                'Deployed on Netlify & Render',
                '30% improved data accuracy',
            ],
        },
    ];

    return (
        <Box
            id="projects"
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
                    Personal Projects
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
                        gap: 4,
                    }}
                >
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                                border: '1px solid #333333',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, sm: 3 } }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 600,
                                    }}
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: '#b0b0b0',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            mb: 1,
                                            color: '#e0e0e0',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Key Highlights:
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {project.highlights.map((highlight, idx) => (
                                            <Box
                                                component="li"
                                                key={idx}
                                                sx={{
                                                    color: '#b0b0b0',
                                                    mb: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&::marker': {
                                                        color: '#ffffff',
                                                    },
                                                }}
                                            >
                                                {highlight}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    {project.technologies.map((tech, techIndex) => (
                                        <Chip
                                            key={techIndex}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                color: '#ffffff',
                                                fontSize: '0.75rem',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </CardContent>

                            <CardActions sx={{ p: { xs: 2.5, sm: 3 }, pt: 0, flexDirection: { xs: 'column', sm: 'row' }, gap: 1, alignItems: 'stretch' }}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<Launch />}
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                                >
                                    Live Demo
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<GitHub />}
                                    href={project.frontendUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                                >
                                    Frontend
                                </Button>
                                {project.backendUrl && (
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        startIcon={<GitHub />}
                                        href={project.backendUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                                    >
                                        Backend
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
