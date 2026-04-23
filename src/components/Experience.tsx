import { motion, Variants } from 'framer-motion';
import {
  Building2,
  Calendar,
  CheckCircle2,
  Trophy,
  Target,
} from 'lucide-react';
import { getExperience } from '../data/portfolioData';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  techStack,
  index,
}: {
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
  index: number;
}) => (
  <motion.div
    variants={fadeLeft}
    custom={index}
    className="relative pl-5 sm:pl-8 pb-12 border-l-2 border-gray-800 dark:border-gray-300 last:border-l-0 group"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full group-hover:scale-125 group-hover:bg-cyan-400 transition-all" />
    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
      <div className="flex items-center gap-2 mb-1">
        <Building2 className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-gray-900">{role}</h3>
      </div>
      <div className="flex items-center gap-2 text-cyan-400 dark:text-cyan-600 font-medium">
        <Trophy className="w-4 h-4" />
        <p>{company}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-1">
        <Calendar className="w-4 h-4" />
        <p>{period}</p>
      </div>
    </div>

    <div className="space-y-4">
      <div className="bg-gray-900/50 dark:bg-gray-200/80 p-4 rounded-lg border border-gray-800 dark:border-gray-300 hover:border-cyan-500/30 dark:hover:border-cyan-400/30 transition-colors">
        <h4 className="text-lg font-semibold text-cyan-400 dark:text-cyan-600 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Key Responsibilities
        </h4>
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 dark:text-gray-700">
              <CheckCircle2 className="w-4 h-4 mt-1 text-cyan-500/70 dark:text-cyan-600/70 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800 dark:bg-gray-300 text-cyan-300 dark:text-cyan-700 rounded-full text-sm hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = getExperience();

  return (
    <section id="experience" className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
            5+ years building production web applications across fintech, enterprise, and SaaS — from frontend to backend.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
