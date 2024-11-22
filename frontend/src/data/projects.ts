export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce website with modern UI, secure authentication, and comprehensive product management.',
    image: '/images/ecommerce.jpg', // Add your project screenshot
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux Toolkit',
      'Tailwind CSS',
      'JWT'
    ],
    features: [
      'Modern and responsive UI design',
      'Product browsing with filtering and search',
      'Shopping cart functionality',
      'User authentication and account management',
      'Secure checkout process',
      'Order tracking',
      'Admin dashboard'
    ],
    liveUrl: 'https://modern-ecommerce-demo.vercel.app', // Update with your deployment URL
    githubUrl: 'https://github.com/hashirsyed/modern-ecommerce'
  },
  // Add more projects here
];
