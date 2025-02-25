import {
  Building2,
  Calendar,
  CheckCircle2,
  Trophy,
  Target,
} from 'lucide-react';

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  techStack,
}: {
  role: string;
  company: string;
  period: string;
  description: string[];
  achievements: string[];
  techStack: string[];
}) => (
  <div className="relative pl-8 pb-12 border-l-2 border-gray-800 last:border-l-0 group">
    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full group-hover:scale-125 group-hover:bg-cyan-400 transition-all" />
    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
      <div className="flex items-center gap-2 mb-1">
        <Building2 className="w-5 h-5 text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">{role}</h3>
      </div>
      <div className="flex items-center gap-2 text-cyan-400 font-medium">
        <Trophy className="w-4 h-4" />
        <p>{company}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
        <Calendar className="w-4 h-4" />
        <p>{period}</p>
      </div>
    </div>

    <div className="space-y-4">
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors">
        <h4 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Key Responsibilities
        </h4>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="w-4 h-4 mt-1 text-cyan-500/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors">
        <h4 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
          <Award className="w-4 h-4" />
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <CheckCircle2 className="w-4 h-4 mt-1 text-cyan-500/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Software Specialist',
      company: 'SSL Wireless',
      period: '2023 - Present',
      description: [
        'Led development of enterprise-scale React applications using TypeScript and Redux',
        'Architected and implemented RESTful APIs using Node.js and NestJS',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and automated deployment processes',
      ],
      achievements: [
        'Reduced application load time by 40% through performance optimization',
        'Successfully delivered 5 major projects ahead of schedule',
        'Implemented automated testing that increased code coverage to 90%',
        'Received "Outstanding Technical Leadership" award',
      ],
      techStack: [
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Nest.js',
        'MySQL',
        'Tailwind CSS',
        'Ant Design',
        'Ant Design Chart',
        'Chart.js',
        'Docker',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Apsis Solutions Ltd.',
      period: '2020 - 2023',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Implemented responsive designs using Tailwind CSS',
        'Built RESTful APIs and integrated third-party services',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
      ],
      achievements: [
        'Increased client satisfaction score from 85% to 95%',
        'Reduced bug reports by 60% through improved testing practices',
        'Mentored 3 junior developers who were promoted to mid-level',
        'Implemented new feature that increased user engagement by 35%',
      ],
      techStack: [
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Nest.js',
        'MySQL',
        'Tailwind CSS',
        'Ant Design',
        'Ant Design Chart',
        'Chart.js',
        'AWS',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Al-Hiyal Software',
      period: '2018 - 2020',
      description: [
        'Developed robust web applications using C-Sharp and ASP.NET Web Forms, ensuring scalable and maintainable code.',
        'Implemented efficient data access with Entity Framework, utilizing LINQ for querying databases',
        'Designed and maintained SQL databases, writing complex queries and stored procedures for data manipulationand retrieval.',
        'Created dynamic and interactive web pages using ASP.NET Web Forms, enhancing user experience through server-side controls.',
      ],
      achievements: [
        'Improved website performance score from 65 to 95',
        'Developed reusable component library used across projects',
        'Reduced development time by 30% through component standardization',
        'Received "Rookie of the Year" award',
      ],
      techStack: [
        'C#',
        'Asp.net',
        'Web Forms',
        'Linq',
        'Entity Framework',
        'MSSQL',
        'TFS',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Work Experience
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Over 4 years of experience in developing modern web applications,
          leading teams, and delivering high-quality solutions.
        </p>
        <div className="max-w-4xl mx-auto slide-up">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
