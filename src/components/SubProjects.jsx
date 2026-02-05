import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const SubProjects = () => {
    const otherProjects = [
        {
            title: 'Railway Management System (RMS)',
            description: 'A comprehensive system for managing railway operations, including ticket booking and seat management.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            githubLinks: [
                { label: 'Frontend', url: 'https://github.com/lokeshwarp01/RMS_frontend' },
                { label: 'Backend', url: 'https://github.com/lokeshwarp01/RMS_backend' },
                { label: 'Full Repo', url: 'https://github.com/lokeshwarp01/RMS' }
            ]
        },
        {
            title: 'Farmer Friend',
            description: 'An application designed to assist farmers with crop management and market information.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            githubLinks: [
                { label: 'Frontend', url: 'https://github.com/lokeshwarp01/farmer_friend_frontend' },
                { label: 'Backend', url: 'https://github.com/lokeshwarp01/farmer_friend_backend' }
            ]
        },
        {
            title: 'Movie Book',
            description: 'A movie database and booking simulation application.',
            technologies: ['React.js', 'Material-UI', 'API Integration'],
            githubLinks: [
                { label: 'GitHub', url: 'https://github.com/lokeshwarp01/Movie_Book' }
            ]
        },
        {
            title: 'Indian Book House',
            description: 'An online platform for browsing and purchasing books with a focus on Indian literature.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLinks: [
                { label: 'GitHub', url: 'https://github.com/lokeshwarp01/indianbookhouse' }
            ]
        },
        {
            title: 'Meshop Backend',
            description: 'The backend infrastructure for the Meshop e-commerce platform.',
            technologies: ['Node.js', 'Express.js', 'MongoDB'],
            githubLinks: [
                { label: 'GitHub', url: 'https://github.com/lokeshwarp01/meshop-backend' }
            ]
        },
        {
            title: 'Lokeshwokai',
            description: 'A personal project or utility tool developed for experimental purposes.',
            technologies: ['JavaScript', 'Experimental'],
            githubLinks: [
                { label: 'GitHub', url: 'https://github.com/lokeshwarp01/lokeshwokai' }
            ]
        }
    ];

    return (
        <Box
            id="other-projects"
            sx={{
                py: { xs: 8, md: 10 },
                background: '#f5f5f5',
                borderTop: '4px solid #000',
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'left',
                        mb: 6,
                        color: '#000',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-1px'
                    }}
                >
                    Other Repositories // Archive
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gap: 4,
                    }}
                >
                    {otherProjects.map((project, index) => (
                        <Card
                            key={index}
                            className="brutalist-card"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 0,
                                backgroundColor: '#fff',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translate(-4px, -4px)',
                                    boxShadow: '8px 8px 0px #000',
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        fontSize: '1.25rem'
                                    }}
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 3,
                                        color: '#333',
                                        fontWeight: 500,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    {project.technologies.map((tech, techIndex) => (
                                        <Chip
                                            key={techIndex}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                border: '1px solid #000',
                                                backgroundColor: '#eee',
                                                fontWeight: 700,
                                                borderRadius: 0,
                                                fontSize: '0.7rem'
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </CardContent>

                            <CardActions
                                sx={{
                                    p: 3,
                                    pt: 0,
                                    flexWrap: 'wrap',
                                    gap: 1
                                }}
                            >
                                {project.githubLinks.map((link, linkIndex) => (
                                    <Button
                                        key={linkIndex}
                                        variant="outlined"
                                        size="small"
                                        startIcon={<GitHub />}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderRadius: 0,
                                            border: '2px solid #000',
                                            color: '#000',
                                            fontWeight: 800,
                                            '&:hover': {
                                                backgroundColor: '#000',
                                                color: '#fff',
                                                border: '2px solid #000',
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default SubProjects;
