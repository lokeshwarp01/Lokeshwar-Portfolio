import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
            light: '#333333',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#e0e0e0',
            contrastText: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
        divider: '#000000',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '4rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1.2,
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 500,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    borderRadius: 0,
                    padding: '12px 28px',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '3px solid #000000',
                    boxShadow: '4px 4px 0px #000000',
                    '&:hover': {
                        transform: 'translate(-2px, -2px)',
                        boxShadow: '8px 8px 0px #000000',
                        backgroundColor: '#ffffff',
                        color: '#000000',
                    },
                    '&:active': {
                        transform: 'translate(2px, 2px)',
                        boxShadow: '0px 0px 0px #000000',
                    },
                },
                contained: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#ffffff',
                        color: '#000000',
                    },
                },
                outlined: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    borderWidth: '3px !important',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    border: '3px solid #000000',
                    borderRadius: 0,
                    transition: 'all 0.2s ease',
                    boxShadow: '6px 6px 0px #000000',
                    '&:hover': {
                        transform: 'translate(-4px, -4px)',
                        boxShadow: '12px 12px 0px #000000',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '2px solid #000000',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#000000',
                        color: '#ffffff',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    borderRadius: 0,
                    border: '3px solid #000000',
                    boxShadow: '6px 6px 0px #000000',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: '3px solid #000000',
                    boxShadow: '4px 4px 0px #000000',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                        transform: 'translate(-2px, -2px)',
                        boxShadow: '6px 6px 0px #000000',
                        backgroundColor: '#000000',
                        color: '#ffffff',
                    },
                },
            },
        },
    },
});

export default theme;
