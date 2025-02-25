import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
}) => (
  <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-400 hover:text-gray-300"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Redux', 'Node.js', 'MySQL'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/prodip2416',
    },
    {
      title: 'Task Management System',
      description: 'Enterprise task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/prodip2416',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging and file sharing',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/prodip2416',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`slide-up-delay-${index}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;