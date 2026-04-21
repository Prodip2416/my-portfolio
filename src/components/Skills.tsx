const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-gray-900 dark:bg-gray-200 p-6 rounded-xl border border-gray-800 dark:border-gray-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-colors h-full flex flex-col">
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
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'Zustand',
      'Ant Design',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'React Hook Form',
      'Axios',
    ],
    backend: [
      'Node.js',
      'NestJS',
      'RESTful APIs',
      'Socket.io',
      'MySQL',
      'PostgreSQL',
      'TypeORM',
      'JWT Auth',
      'RBAC',
      'API Integration',
    ],
    tools: [
      'Git & GitHub',
      'VS Code',
      'npm / yarn',
      'Postman',
      'Chrome DevTools',
      'Claude AI',
      'Cursor',
      'ChatGPT',
      'Jira',
      'Figma',
      'Linux / Bash',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-gray-900">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={skillsets.frontend} />
          <SkillCard title="Backend Development" skills={skillsets.backend} />
          <SkillCard title="Tools & Technologies" skills={skillsets.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
