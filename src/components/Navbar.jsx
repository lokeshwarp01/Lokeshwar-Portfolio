import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ visible }) => {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveTab(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-18% 0px -55% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setActiveTab(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderBottom: '4px solid #000000',
        transform: visible ? 'translateY(0)' : 'translateY(-120%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 220ms ease, opacity 220ms ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          gap: 2,
          minHeight: { xs: 64, sm: 72 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Button
          onClick={() => scrollToSection('home')}
          variant="contained"
          sx={{
            whiteSpace: 'nowrap',
            px: { xs: 2, sm: 2.5 },
            py: { xs: 0.9, sm: 1 },
          }}
        >
          LOKESHWAR
        </Button>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            overflowX: 'auto',
            py: 0.5,
            pr: 0.25,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              variant={activeTab === item.id ? "contained" : "outlined"}
              sx={{
                flexShrink: 0,
                minWidth: 'fit-content',
                whiteSpace: 'nowrap',
                px: { xs: 2, sm: 2.25 },
                py: { xs: 0.9, sm: 1 },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
