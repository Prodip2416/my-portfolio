import React from 'react';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
    <h3 className="text-xl font-semibold mb-4 text-cyan-400">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
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
      'React',
      'Redux',
      'Next.js',
      'Tailwind CSS',
      'Ant Design',
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'NestJS',
      'RESTful APIs',
      'MySQL',
      'Authentication',
      'Authorization',
    ],
    tools: ['Git', 'VS Code', 'npm/yarn', 'Webpack', 'Docker', 'Jest', 'CI/CD'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="slide-up">
            <SkillCard
              title="Frontend Development"
              skills={skillsets.frontend}
            />
          </div>
          <div className="slide-up-delay-1">
            <SkillCard title="Backend Development" skills={skillsets.backend} />
          </div>
          <div className="slide-up-delay-2">
            <SkillCard title="Tools & Technologies" skills={skillsets.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
