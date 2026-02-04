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
                    Projects // Build
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 6,
                    }}
                >
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="brutalist-card"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 0,
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 } }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        lineHeight: 1.1
                                    }}
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 4,
                                        color: '#000',
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                <Box sx={{ mb: 4, p: 2, border: '2px dashed #000' }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            mb: 1.5,
                                            color: '#000',
                                            fontWeight: 900,
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        Highlights:
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {project.highlights.map((highlight, idx) => (
                                            <Box
                                                component="li"
                                                key={idx}
                                                sx={{
                                                    color: '#000',
                                                    mb: 1,
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                }}
                                            >
                                                {highlight}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                                    {project.technologies.map((tech, techIndex) => (
                                        <Chip
                                            key={techIndex}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                border: '2px solid #000',
                                                backgroundColor: '#fff',
                                                fontWeight: 800,
                                                borderRadius: 0,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </CardContent>

                            <CardActions
                                disableSpacing
                                sx={{
                                    p: { xs: 3, sm: 4 },
                                    pt: 0,
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    gap: 2,
                                    alignItems: 'stretch',
                                    '& > *': {
                                        margin: '0 !important',
                                    }
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<Launch />}
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<GitHub />}
                                    href={project.frontendUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Frontend
                                </Button>
                                {project.backendUrl && (
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<GitHub />}
                                        href={project.backendUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
