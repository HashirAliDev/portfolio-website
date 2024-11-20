import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 12,
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
      }}
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      right: 20,
                      bottom: 20,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: 2,
                      zIndex: 0,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1',
                      borderRadius: 2,
                      zIndex: 1,
                      position: 'relative',
                    }}
                    src="/path-to-your-image.jpg" // Add your image path here
                    alt="Profile"
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 'medium' }}
                >
                  Full-Stack Developer & UI/UX Enthusiast
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  With a passion for creating beautiful and functional web applications,
                  I bring ideas to life through clean code and intuitive design.
                  My journey in web development started with a curiosity for building
                  things that make a difference.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  I specialize in building modern web applications using React,
                  Node.js, and other cutting-edge technologies. My approach combines
                  technical expertise with a keen eye for design, ensuring that every
                  project not only functions flawlessly but also provides an
                  exceptional user experience.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={3}>
                    {[
                      { number: '5+', label: 'Years Experience' },
                      { number: '50+', label: 'Projects Completed' },
                      { number: '30+', label: 'Happy Clients' },
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 2,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                            },
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 'bold',
                              color: 'primary.main',
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            {stat.label}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
