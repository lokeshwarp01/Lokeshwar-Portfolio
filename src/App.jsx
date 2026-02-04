import React from 'react';
import { Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Box>
  );
}

export default App;
