import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!visible && mobileOpen) {
      setMobileOpen(false);
    }
  }, [visible, mobileOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const sectionRatios = new Map(sections.map((section) => [section.id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        let nextActive = '';
        let maxRatio = 0;

        sectionRatios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextActive = id;
          }
        });

        if (nextActive) {
          setActiveTab(nextActive);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.7],
        rootMargin: '-12% 0px -52% 0px',
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

  const handleMobileNavigate = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
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
          gap: 1.5,
          minHeight: { xs: 64, sm: 72 },
          px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
        }}
      >
        <Button
          onClick={() => scrollToSection('home')}
          variant="contained"
          sx={{
            whiteSpace: 'nowrap',
            px: { xs: 1.6, sm: 2.2 },
            py: { xs: 0.75, sm: 0.95 },
            fontSize: { xs: '0.75rem', sm: '0.85rem' },
            flexShrink: 0,
          }}
        >
          LOKESHWAR
        </Button>

        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
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
              variant={activeTab === item.id ? 'contained' : 'outlined'}
              sx={{
                flexShrink: 0,
                minWidth: 'fit-content',
                whiteSpace: 'nowrap',
                px: 2,
                py: 0.95,
                fontSize: '0.78rem',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          aria-label="open navigation menu"
          onClick={() => setMobileOpen(true)}
          sx={{
            display: { xs: 'inline-flex', lg: 'none' },
            p: 0.95,
            ml: 'auto',
          }}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '86vw', sm: 340 },
            p: 2,
            backgroundColor: '#ffffff',
            borderLeft: '4px solid #000000',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <IconButton
            aria-label="close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <Close />
          </IconButton>
        </Box>

        <Stack spacing={1.5}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleMobileNavigate('home')}
            sx={{ justifyContent: 'flex-start' }}
          >
            Home
          </Button>

          {navItems.map((item) => (
            <Button
              key={`mobile-${item.id}`}
              fullWidth
              onClick={() => handleMobileNavigate(item.id)}
              variant={activeTab === item.id ? 'contained' : 'outlined'}
              sx={{ justifyContent: 'flex-start' }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
