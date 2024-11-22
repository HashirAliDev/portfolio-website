import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2196F3',
          },
          secondary: {
            main: '#21CBF3',
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              html: {
                scrollBehavior: 'smooth',
              },
              body: {
                transition: 'background-color 0.3s ease',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <title>Your Name - Portfolio</title>
          <meta name="description" content="Professional portfolio showcasing my projects and skills in web development" />
          <meta name="keywords" content="portfolio, web developer, frontend, backend, full-stack" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Your Name - Portfolio" />
          <meta property="og:description" content="Professional portfolio showcasing my projects and skills in web development" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://your-portfolio-url.com" />
        </Helmet>
        <ErrorBoundary>
          <Router>
            <Navbar onThemeToggle={toggleTheme} currentTheme={mode} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Projects />
                    <Skills />
                    <About />
                    <Contact />
                  </>
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
