import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) {
      setShowNavbar(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Navbar visible={showNavbar} />
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
