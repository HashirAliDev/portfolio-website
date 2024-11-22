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
    description: 'A comprehensive cryptocurrency tracking platform that provides real-time price data, market trends, and detailed coin information using the CoinGecko API.',
    image: '/projects/crypto-tracker.png',
    technologies: ['React', 'TypeScript', 'Material-UI', 'CoinGecko API', 'Axios'],
    githubUrl: 'https://github.com/HashirAliDev/crypto-tracker',
    liveUrl: 'https://crypto-tracker-chi-eight.vercel.app/',
    features: [
      'Real-time cryptocurrency prices',
      'Detailed coin information',
      'Market cap rankings',
      'Price change tracking',
      'Responsive design',
    ],
  },
  {
    title: 'Weather App',
    description: 'An intuitive weather application that delivers accurate weather forecasts, current conditions, and location-based weather updates using the OpenWeather API.',
    image: '/projects/weather-app.png',
    technologies: ['React', 'OpenWeather API', 'Material-UI', 'Axios', 'TypeScript'],
    githubUrl: 'https://github.com/HashirAliDev/weather-app',
    liveUrl: 'https://weather-app-hashiralidev.vercel.app/',
    features: [
      'Current weather conditions',
      'Detailed forecasts',
      'Location-based weather',
      'Temperature unit conversion',
      'Weather icons and descriptions',
    ],
  },
  {
    title: 'Movie App',
    description: 'A Netflix-inspired movie application that allows users to discover, search, and explore movies and TV shows using the TMDB API, featuring a modern and responsive design.',
    image: '/projects/movie-app.png',
    technologies: ['React', 'Vite', 'TMDB API', 'Styled Components', 'Axios'],
    githubUrl: 'https://github.com/HashirAliDev/movie-app',
    liveUrl: 'https://movie-app1-two.vercel.app/',
    features: [
      'Movie and TV show browsing',
      'Search functionality',
      'Detailed movie information',
      'Responsive Netflix-like UI',
      'Genre-based filtering',
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
      component="section"
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
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
                            sx={{ mr: 0.5, mb: 0.5 }}
                          />
                        ))}
                      </Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Key Features:
                      </Typography>
                      <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
                        {project.features.map((feature, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="text.secondary">
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        endIcon={<LaunchIcon />}
                      >
                        Live Demo
                      </Button>
                      <IconButton
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
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
