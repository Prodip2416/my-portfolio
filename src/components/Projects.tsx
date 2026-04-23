import { motion, Variants } from 'framer-motion';
import { ExternalLink, LucideGithub } from 'lucide-react';
import { getFeaturedProjects } from '../data/portfolioData';
import { trackPortfolioEvent } from '../utils/analytics';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
  category,
  status,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
  category: string;
  status: string;
}) => (
  <div className="flex flex-col h-full bg-gray-900 dark:bg-white rounded-xl overflow-hidden border border-gray-800 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="px-2 py-1 bg-cyan-500 text-gray-900 rounded-full text-xs font-semibold">
          {category}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === 'Live'
              ? 'bg-green-500 text-white'
              : 'bg-yellow-500 text-gray-900'
          }`}
        >
          {status}
        </span>
      </div>
    </div>
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-900 group-hover:text-cyan-400 dark:group-hover:text-cyan-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 dark:text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={item}
            className="px-2 py-1 bg-gray-800 dark:bg-gray-100 text-cyan-300 dark:text-cyan-600 rounded-full text-sm hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 dark:text-cyan-600 hover:text-cyan-300 dark:hover:text-cyan-500 transition-all duration-300 hover:scale-105 group/link"
            onClick={() => trackPortfolioEvent.projectDemo(title)}
          >
            <ExternalLink size={16} className="group-hover/link:animate-bounce" />
            Live Demo
          </a>
        )}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-700 transition-all duration-300 hover:scale-105 group/link"
          onClick={() => trackPortfolioEvent.projectCode(title)}
        >
          <LucideGithub size={16} className="group-hover/link:animate-spin-slow" />
          Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-gray-900"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={scaleIn} className="h-full">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
