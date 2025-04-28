
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
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in Information Systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
