
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'Inventory Management System',
    description:
      'A comprehensive system for tracking and managing inventory across multiple locations.',
    image: '/placeholder.svg',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Student Portal',
    description:
      'A portal for students to access course materials, grades, and communicate with professors.',
    image: '/placeholder.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Vue.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce Analytics Dashboard',
    description:
      'Real-time dashboard for tracking sales, customer behavior, and inventory levels.',
    image: '/placeholder.svg',
    technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  
};

export default ProjectsSection;
