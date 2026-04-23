import { motion, Variants } from 'framer-motion';

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

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-gray-900 dark:bg-gray-200 p-4 sm:p-6 rounded-xl border border-gray-800 dark:border-gray-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-colors h-full flex flex-col">
    <h3 className="text-xl font-semibold mb-4 text-cyan-400 dark:text-cyan-600">{title}</h3>
    <div className="flex flex-wrap gap-2 content-start">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-gray-800 dark:bg-gray-300 text-cyan-300 dark:text-cyan-700 rounded-full text-sm hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsets = {
    frontend: [
      'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'Zustand',
      'Ant Design', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design',
      'React Hook Form', 'Axios',
    ],
    backend: [
      'Node.js', 'NestJS', 'RESTful APIs', 'Socket.io', 'MySQL', 'PostgreSQL',
      'TypeORM', 'JWT Auth', 'RBAC', 'API Integration',
    ],
    tools: [
      'Git & GitHub', 'VS Code', 'npm / yarn', 'Postman', 'Chrome DevTools',
      'Claude AI', 'Cursor', 'ChatGPT', 'Jira', 'Figma', 'Linux / Bash',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-gray-900"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={scaleIn}>
            <SkillCard title="Frontend Development" skills={skillsets.frontend} />
          </motion.div>
          <motion.div variants={scaleIn}>
            <SkillCard title="Backend Development" skills={skillsets.backend} />
          </motion.div>
          <motion.div variants={scaleIn}>
            <SkillCard title="Tools & Technologies" skills={skillsets.tools} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
