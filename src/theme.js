import { createTheme } from '@mui/material/styles';

// Black and White Premium Theme
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#e0e0e0',
            contrastText: '#000000',
        },
        secondary: {
            main: '#000000',
            light: '#333333',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        background: {
            default: '#000000',
            paper: '#0a0a0a',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
        divider: '#333333',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '4rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 8,
                    padding: '10px 24px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15)',
                    },
                },
                contained: {
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                    color: '#000000',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)',
                    },
                },
                outlined: {
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                    border: '1px solid #333333',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
                        borderColor: '#ffffff',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 6,
                    border: '1px solid #333333',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

export default theme;
