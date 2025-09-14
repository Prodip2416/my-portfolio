import React from 'react';
import { Code2, Database, Wrench, Award } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: React.ComponentType<any>;
}

const SkillBar = ({ skill, index }: { skill: SkillItem; index: number }) => (
  <div
    className="mb-6 animate-slide-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        {skill.icon && <skill.icon className="w-4 h-4 text-cyan-400" />}
        <span className="text-white dark:text-gray-900 font-medium">
          {skill.name}
        </span>
      </div>
      <span className="text-cyan-400 dark:text-cyan-600 font-semibold">
        {skill.level}%
      </span>
    </div>
    <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${skill.level}%`,
          animationDelay: `${index * 0.1 + 0.5}s`,
        }}
      />
    </div>
  </div>
);

const SkillsProficiency = () => {
  const skills: SkillItem[] = [
    // Frontend Skills
    { name: 'React.js', level: 90, category: 'Frontend', icon: Code2 },
    { name: 'JavaScript', level: 95, category: 'Frontend', icon: Code2 },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: Code2 },
    { name: 'Next.js', level: 80, category: 'Frontend', icon: Code2 },
    { name: 'Redux', level: 88, category: 'Frontend', icon: Code2 },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: Code2 },
    { name: 'Ant Design', level: 90, category: 'Frontend', icon: Code2 },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: Code2 },

    // Backend Skills
    { name: 'Node.js', level: 50, category: 'Backend', icon: Database },
    { name: 'Express.js', level: 45, category: 'Backend', icon: Database },
    { name: 'NestJS', level: 40, category: 'Backend', icon: Database },
    { name: 'REST APIs', level: 55, category: 'Backend', icon: Database },
    {
      name: 'JWT Authentication',
      level: 50,
      category: 'Backend',
      icon: Database,
    },

    // Database Skills
    { name: 'MySQL', level: 70, category: 'Database', icon: Database },
    { name: 'MSSQL', level: 70, category: 'Database', icon: Database },
    { name: 'PostgreSQL', level: 65, category: 'Database', icon: Database },
    { name: 'SQL', level: 85, category: 'Database', icon: Database },
    { name: 'MongoDB', level: 60, category: 'Database', icon: Database },
    {
      name: 'Database Design',
      level: 75,
      category: 'Database',
      icon: Database,
    },

    // Tools & Technologies
    { name: 'Git', level: 92, category: 'Tools', icon: Wrench },
    { name: 'VS Code', level: 95, category: 'Tools', icon: Wrench },
    { name: 'NPM/Yarn', level: 90, category: 'Tools', icon: Wrench },
    { name: 'Webpack', level: 75, category: 'Tools', icon: Wrench },
    { name: 'Chrome DevTools', level: 88, category: 'Tools', icon: Wrench },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];
  const categoryIcons = {
    Frontend: Code2,
    Backend: Database,
    Database: Database,
    Tools: Wrench,
  };

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white dark:text-gray-900 animate-fade-in">
            Technical Expertise
          </h2>
          <p className="text-gray-400 dark:text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-slide-up-delay-1">
            Proficiency levels based on 4+ years of hands-on experience and
            continuous learning
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {categories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );
              const Icon =
                categoryIcons[category as keyof typeof categoryIcons];

              return (
                <div
                  key={category}
                  className="bg-gray-800 dark:bg-white p-8 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white dark:text-gray-900">
                      {category} Development
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div className="mt-16 bg-gray-800 dark:bg-white p-8 rounded-xl border border-gray-700 dark:border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white dark:text-gray-900">
                Certifications & Achievements
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-700 dark:bg-gray-100 p-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-200 transition-colors">
                <h4 className="font-semibold text-white dark:text-gray-900 mb-2">
                  HackerRank Certifications
                </h4>
                <ul className="text-sm text-gray-300 dark:text-gray-600 space-y-1">
                  <li>• SQL (Basic) - Verified</li>
                  <li>• React (Basic) - Verified</li>
                  <li>• SQL (Intermediate) - Verified</li>
                  <li>• JavaScript (Basic) - Verified</li>
                  <li>• Frontend Developer (React) - Verified</li>
                </ul>
              </div>

              <div className="bg-gray-700 dark:bg-gray-100 p-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-200 transition-colors">
                <h4 className="font-semibold text-white dark:text-gray-900 mb-2">
                  Problem Solving
                </h4>
                <ul className="text-sm text-gray-300 dark:text-gray-600 space-y-1">
                  <li>• 100+ Problems Solved</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Competitive Programming</li>
                  <li>• Code Quality & Optimization</li>
                </ul>
              </div>

              <div className="bg-gray-700 dark:bg-gray-100 p-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-200 transition-colors">
                <h4 className="font-semibold text-white dark:text-gray-900 mb-2">
                  Professional Experience
                </h4>
                <ul className="text-sm text-gray-300 dark:text-gray-600 space-y-1">
                  <li>• 4+ Years Full-Stack Development</li>
                  <li>• Team Leadership & Mentoring</li>
                  <li>• Agile & Scrum Methodologies</li>
                  <li>• Code Review & Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProficiency;
