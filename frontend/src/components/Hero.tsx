import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
  };

  const gradientText = {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              position: 'absolute',
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(33,150,243,0.1) 0%, rgba(33,203,243,0.05) 100%)`,
              filter: 'blur(20px)',
            }}
          />
        ))}
      </Box>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    ...gradientText,
                  }}
                >
                  Hello, I'm Hashir Ali
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  Full Stack Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: '1.2rem',
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  I craft beautiful and functional web experiences with modern technologies.
                  Let's build something amazing together.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="#projects"
                      sx={{
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        color: 'white',
                        px: 4,
                        py: 2,
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="#contact"
                      sx={{
                        borderColor: '#2196F3',
                        color: '#2196F3',
                        px: 4,
                        py: 2,
                      }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                animate={floatingAnimation}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Replace this with your hero image or illustration */}
                <Box
                  component="img"
                  src="/hero-illustration.svg"
                  alt="Hero Illustration"
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
