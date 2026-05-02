import { motion, Variants } from 'framer-motion';
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const coreSkills = new Set([
  'TypeScript',
  'React.js',
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Tailwind CSS',
]);

const SkillCard = ({
  title,
  subtitle,
  skills,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  skills: string[];
  icon: typeof Code2;
}) => (
  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:shadow-cyan-950/30 dark:border-gray-900/10 dark:bg-white/70 dark:shadow-gray-300/30 dark:hover:border-cyan-700/30 dark:hover:bg-white">
    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70" />
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-cyan-500/10" />
    <div className="relative flex h-full flex-col">
      <div className="mb-5 flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/20 transition-transform duration-300 group-hover:scale-105 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700 dark:shadow-cyan-100/50">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white dark:text-gray-900 sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-gray-400 dark:text-gray-600">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 content-start">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
            coreSkills.has(skill)
              ? 'border-cyan-300/35 bg-cyan-400/15 text-cyan-100 shadow-sm shadow-cyan-950/20 hover:bg-cyan-400/20 dark:border-cyan-700/25 dark:bg-cyan-500/10 dark:text-cyan-700'
              : 'border-white/10 bg-gray-950/35 text-gray-300 hover:border-cyan-300/25 hover:text-cyan-200 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700'
          }`}
        >
          {coreSkills.has(skill) && <Sparkles className="h-3.5 w-3.5" />}
          {skill}
        </span>
      ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      title: 'Frontend Development',
      subtitle: 'Interfaces that feel fast, polished, and production-ready.',
      icon: Layers3,
      skills: [
        'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'Zustand',
        'Ant Design', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design',
        'React Hook Form', 'Axios',
      ],
    },
    {
      title: 'Backend Development',
      subtitle: 'APIs, auth, data models, and realtime application layers.',
      icon: Server,
      skills: [
        'Node.js', 'NestJS', 'RESTful APIs', 'Socket.io', 'MySQL', 'PostgreSQL',
        'TypeORM', 'JWT Auth', 'RBAC', 'API Integration',
      ],
    },
    {
      title: 'Tools & Technologies',
      subtitle: 'Daily workflow tools for shipping, debugging, and collaboration.',
      icon: Wrench,
      skills: [
        'Git & GitHub', 'VS Code', 'npm / yarn', 'Postman', 'Chrome DevTools',
        'Claude AI', 'Cursor', 'ChatGPT', 'Jira', 'Figma', 'Linux / Bash',
      ],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-20 bg-gray-900 dark:bg-gray-100 transition-colors duration-300">
      <div className="pointer-events-none absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
      <div className="container relative mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700">
            <Braces className="h-4 w-4" />
            Technical Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900">
            Skills That Power My Builds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 dark:text-gray-600 sm:text-lg">
            A focused stack for building scalable, responsive, and maintainable full-stack web applications.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsets.map((skillset) => (
            <motion.div key={skillset.title} variants={scaleIn}>
              <SkillCard {...skillset} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-gray-400 dark:text-gray-600"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/30 px-4 py-2 dark:border-gray-900/10 dark:bg-white/70">
            <Code2 className="h-4 w-4 text-cyan-300 dark:text-cyan-700" />
            Frontend focused
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/30 px-4 py-2 dark:border-gray-900/10 dark:bg-white/70">
            <Database className="h-4 w-4 text-cyan-300 dark:text-cyan-700" />
            Database aware
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/30 px-4 py-2 dark:border-gray-900/10 dark:bg-white/70">
            <Terminal className="h-4 w-4 text-cyan-300 dark:text-cyan-700" />
            Shipping mindset
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
