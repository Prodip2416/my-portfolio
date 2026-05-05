import { motion, Variants } from 'framer-motion';
import {
  Building2,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
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
  visible: { transition: { staggerChildren: 0.16 } },
};

const focusTech = new Set(['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'NestJS']);

const experienceStats = [
  {
    label: 'Years Experience',
    value: '5+',
    icon: Briefcase,
  },
  {
    label: 'Core Stack',
    value: 'JS / TS',
    icon: Code2,
  },
  {
    label: 'Frontend to Backend',
    value: 'React + Nest',
    icon: Layers3,
  },
];

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
    className="group relative pl-6 sm:pl-10 pb-10 last:pb-0"
  >
    <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-cyan-400/60 via-gray-800 to-transparent dark:via-gray-300" />
    <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-gray-950 bg-cyan-400 shadow-lg shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-125 dark:border-gray-100 dark:bg-cyan-600" />

    <div className="rounded-xl border border-white/10 bg-gray-900/45 p-5 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-gray-900/65 dark:border-gray-900/10 dark:bg-white/75 dark:shadow-gray-300/30 dark:hover:border-cyan-700/25 dark:hover:bg-white sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold text-white dark:text-gray-900 sm:text-2xl">{role}</h3>
            {period.includes('Present') && (
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Current
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 dark:text-cyan-700 sm:text-base">
            <Building2 className="h-4 w-4" />
            <span>{company}</span>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-gray-400 dark:border-gray-900/10 dark:bg-gray-100 dark:text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{period}</span>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {description.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-7 text-gray-300 dark:text-gray-700 sm:text-base">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400/80 dark:text-cyan-600/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => {
          const isFocusTech = focusTech.has(tech);

          return (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors sm:text-sm ${
                isFocusTech
                  ? 'border border-cyan-300/25 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/15 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300'
              }`}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = getExperience();

  return (
    <section id="experience" className="relative overflow-hidden py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
      <div className="container relative mx-auto px-4">
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
            5+ years building production web applications with JavaScript, TypeScript, React.js, Next.js, and NestJS.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-12 grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          {experienceStats.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/45 p-4 text-center shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:bg-gray-900/65 hover:shadow-2xl hover:shadow-cyan-950/20 dark:border-gray-900/10 dark:bg-white/75 dark:shadow-gray-300/30 dark:hover:border-cyan-700/25 dark:hover:bg-white dark:hover:shadow-cyan-900/10"
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition-all duration-300 group-hover:via-cyan-300/70 dark:group-hover:via-cyan-700/50" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/0 blur-2xl transition-colors duration-300 group-hover:bg-cyan-400/10 dark:group-hover:bg-cyan-500/10" />

              <div className="relative mx-auto mb-3 grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/15 group-hover:text-cyan-200 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700 dark:group-hover:border-cyan-700/35 dark:group-hover:bg-cyan-500/15">
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
              </div>
              <p className="relative text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 dark:text-gray-900 dark:group-hover:text-cyan-800">{value}</p>
              <p className="relative mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300 dark:text-gray-600 dark:group-hover:text-gray-700">{label}</p>
            </motion.div>
          ))}
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
