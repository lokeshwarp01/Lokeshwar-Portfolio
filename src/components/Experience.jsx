import React from "react";
import { Box, Container, Typography, Paper, Chip } from "@mui/material";
import { Work, CalendarToday, LocationOn } from "@mui/icons-material";

const Experience = () => {
  const experience = {
    title: "Student Intern",
    company: "TechU Innovation Labs",
    location: "Madhapur, Hyderabad, Telangana",
    period: "June 2025 – December 2025",
    achievements: [
      "Developed and deployed the frontend for Wok AI, a healthcare web application enabling online doctor consultations",
      "Built responsive layouts using React.js and Tailwind CSS, improving cross-device performance by 25%",
      "Integrated RESTful APIs (Representational State Transfer) and optimized React Hooks for efficient state management",
      "Collaborated with backend team using Node.js and Express.js to ensure seamless API communication",
      "Enhanced reusability and debugging workflows, reducing frontend maintenance time by 15%",
    ],
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#ffffff",
        borderTop: "6px solid #000",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          className="glitch-text"
          sx={{
            textAlign: "left",
            mb: 6,
            color: "#000",
          }}
        >
          Experience // Lab
        </Typography>

        <Paper
          className="brutalist-card"
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            position: "relative",
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              mb: 4,
              flexWrap: "wrap",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#000",
                color: "#fff",
                px: 2,
                py: 1,
              }}
            >
              <Work sx={{ mr: 1 }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  textTransform: "uppercase",
                }}
              >
                {experience.title}
              </Typography>
            </Box>
            <Chip
              label="COMPLETED"
              sx={{
                borderRadius: 0,
                border: "3px solid #000",
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: 900,
                animation: "shake 1.5s infinite",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              color: "#000",
              mb: 3,
              fontWeight: 800,
              textDecoration: "underline overline",
              textDecorationThickness: "3px",
              textTransform: "uppercase",
            }}
          >
            {experience.company}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: { xs: 2, sm: 4 },
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                fontWeight: 700,
              }}
            >
              <CalendarToday sx={{ fontSize: "1.2rem", mr: 1 }} />
              <Typography variant="body1">{experience.period}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                fontWeight: 700,
              }}
            >
              <LocationOn sx={{ fontSize: "1.2rem", mr: 1 }} />
              <Typography variant="body1">{experience.location}</Typography>
            </Box>
          </Box>

          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            {experience.achievements.map((achievement, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  color: "#000",
                  mb: 2,
                  lineHeight: 1.4,
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  display: "flex",
                  "&::before": {
                    content: '"// "',
                    marginRight: "15px",
                    fontWeight: 900,
                    color: "#000",
                    flexShrink: 0,
                  },
                }}
              >
                {achievement}
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Experience;
