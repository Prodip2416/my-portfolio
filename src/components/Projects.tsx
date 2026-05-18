import { useMemo, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers3, LucideGithub, Sparkles } from 'lucide-react';
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

type Project = ReturnType<typeof getFeaturedProjects>[number];

const getProjectImpact = (project: Project) => {
  if (project.title === 'Tailwind Kit') return '80+ polished UI components';
  if (project.title === 'Data Insights Hub') return '8+ chart types and exports';
  if (project.category === 'AI') return 'AI-assisted workflow automation';
  if (project.category === 'Backend') return 'Production-ready API foundation';
  return 'Responsive modern product experience';
};

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  const { title, description, image, tech, demoLink, githubLink, category, status } = project;
  const visibleTech = featured ? tech.slice(0, 5) : tech.slice(0, 4);
  const hiddenTechCount = Math.max(tech.length - visibleTech.length, 0);

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gray-950/80 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-950/30 dark:border-gray-200 dark:bg-white dark:shadow-gray-200/70 dark:hover:border-cyan-400 ${
        featured ? 'lg:min-h-[460px]' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-64 sm:h-72' : 'h-48'}`}>
      <img
        src={image}
        alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-gray-950 shadow-lg shadow-cyan-950/30">
            <Layers3 size={13} />
          {category}
        </span>
        <span
            className={`rounded-full px-3 py-1 text-xs font-bold shadow-lg ${
            status === 'Live'
                ? 'bg-emerald-400 text-gray-950 shadow-emerald-950/20'
                : 'bg-amber-300 text-gray-950 shadow-amber-950/20'
          }`}
        >
          {status}
        </span>
      </div>
        {featured && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gray-950/75 px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles size={15} className="text-cyan-300" />
              {getProjectImpact(project)}
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-7' : 'p-5'}`}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 dark:text-gray-950 dark:group-hover:text-cyan-700`}>
            {title}
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300 dark:text-gray-400 dark:group-hover:text-cyan-600" />
        </div>

        {!featured && (
          <p className="mb-3 text-sm font-semibold text-cyan-300 dark:text-cyan-700">
            {getProjectImpact(project)}
          </p>
        )}

        <p className={`${featured ? 'text-base' : 'text-sm'} mb-5 line-clamp-3 text-gray-400 transition-colors group-hover:text-gray-300 dark:text-gray-600 dark:group-hover:text-gray-700`}>
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {visibleTech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-cyan-400/15 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300/30 dark:bg-cyan-50 dark:text-cyan-700"
            >
              {item}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-semibold text-gray-300 dark:border-gray-200 dark:bg-gray-100 dark:text-gray-600">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-3 py-2 text-sm font-bold text-gray-950 transition-all duration-300 hover:bg-cyan-300"
            onClick={() => trackPortfolioEvent.projectDemo(title)}
          >
              <ExternalLink size={15} />
            Live Demo
          </a>
        )}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-sm font-bold text-gray-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 dark:border-gray-200 dark:text-gray-700 dark:hover:border-cyan-500 dark:hover:text-cyan-700"
          onClick={() => trackPortfolioEvent.projectCode(title)}
        >
            <LucideGithub size={15} />
          Code
        </a>
      </div>
    </div>
  </div>
  );
};

const Projects = () => {
  const projects = getFeaturedProjects();
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects]
  );
  const heroProjects = filteredProjects.slice(0, 2);
  const regularProjects = filteredProjects.slice(2);

  return (
    <section id="projects" className="bg-gray-900 py-20 transition-colors duration-300 dark:bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 dark:bg-cyan-50 dark:text-cyan-700">
            <Sparkles size={16} />
            Selected Work
          </span>
          <h2 className="text-2xl font-bold text-white dark:text-gray-900 sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-gray-400 dark:text-gray-600">
            Practical tools, polished interfaces, and production-minded experiments.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'border-cyan-400 bg-cyan-400 text-gray-950 shadow-lg shadow-cyan-950/20'
                  : 'border-gray-800 bg-gray-950/60 text-gray-300 hover:border-cyan-400/60 hover:text-cyan-300 dark:border-gray-200 dark:bg-white dark:text-gray-600 dark:hover:text-cyan-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 16 }}
            className="space-y-8"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {heroProjects.map((project) => (
                <motion.div key={project.title} variants={scaleIn} className="h-full">
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </div>

            {regularProjects.length > 0 && (
              <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                {regularProjects.map((project) => (
                  <motion.div key={project.title} variants={scaleIn} className="h-full">
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
