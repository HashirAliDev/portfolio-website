import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  IconButton,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Crypto Tracker',
    description: 'Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis.',
    image: '/projects/crypto-tracker.png',
    technologies: ['React', 'TypeScript', 'Material-UI', 'CoinGecko API', 'Chart.js'],
    githubUrl: 'https://github.com/hashirsyed/crypto-tracker',
    liveUrl: 'https://github.com/hashirsyed/crypto-tracker',
    features: [
      'Real-time price updates',
      'Portfolio tracking',
      'Price alerts',
      'Market analysis',
      'Interactive charts',
    ],
  },
  {
    title: 'Weather App',
    description: 'Modern weather application featuring real-time weather data, forecasts, and location-based weather information.',
    image: '/projects/weather-app.png',
    technologies: ['React', 'OpenWeather API', 'Geolocation', 'Styled Components'],
    githubUrl: 'https://github.com/hashirsyed/weather-app',
    liveUrl: 'https://github.com/hashirsyed/weather-app',
    features: [
      'Current weather',
      '5-day forecast',
      'Location search',
      'Responsive design',
      'Weather alerts',
    ],
  },
  {
    title: 'Movie App',
    description: 'Feature-rich movie application for discovering, searching, and tracking your favorite movies and TV shows.',
    image: '/projects/movie-app.png',
    technologies: ['React', 'TMDB API', 'Redux', 'Material-UI', 'Firebase'],
    githubUrl: 'https://github.com/hashirsyed/movie-app',
    liveUrl: 'https://github.com/hashirsyed/movie-app',
    features: [
      'Movie search',
      'Watchlist',
      'Movie details',
      'User ratings',
      'Recommendations',
    ],
  },
];

const Projects = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 12,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 8,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              background:
                                'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Key Features:
                      </Typography>
                      <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
                        {project.features.map((feature) => (
                          <li key={feature}>
                            <Typography variant="body2" color="text.secondary">
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        component={Link}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        endIcon={<LaunchIcon />}
                        sx={{
                          background:
                            'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          color: 'white',
                          mr: 1,
                        }}
                      >
                        Live Demo
                      </Button>
                      <IconButton
                        component={Link}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
