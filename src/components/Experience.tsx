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
  <div className="relative pl-5 sm:pl-8 pb-12 border-l-2 border-gray-800 dark:border-gray-300 last:border-l-0 group">
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
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300 dark:text-gray-700">
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
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Software Specialist',
      company: 'SSL Wireless',
      period: '2023 - Present',
      description: [
        'Build and maintain enterprise-scale React.js & Next.js applications with TypeScript, focusing on performance and scalability',
        'Design and develop RESTful APIs using NestJS with TypeORM, implementing RBAC and JWT-based authentication',
        'Collaborate closely with UI/UX designers to deliver pixel-perfect, responsive interfaces using Ant Design and Tailwind CSS',
        'Integrate real-time features using Socket.io and data visualization with Chart.js',
        'Conduct code reviews, enforce best practices, and mentor junior developers',
      ],
      achievements: [],
      techStack: [
        'TypeScript',
        'React.js',
        'Next.js',
        'NestJS',
        'Node.js',
        'MySQL',
        'TypeORM',
        'Socket.io',
        'Ant Design',
        'Tailwind CSS',
        'Chart.js',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Apsis Solutions Ltd.',
      period: '2020 - 2023',
      description: [
        'Developed and delivered multiple client-facing web applications using React.js and Next.js',
        'Built scalable backend services with Node.js and NestJS, integrating third-party APIs and payment gateways',
        'Implemented responsive, accessible UIs using Tailwind CSS and Ant Design',
        'Worked in agile teams, participating in sprint planning, code reviews, and daily standups',
        'Optimized application performance and reduced page load times through code splitting and lazy loading',
      ],
      achievements: [],
      techStack: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'NestJS',
        'Node.js',
        'MySQL',
        'Tailwind CSS',
        'Ant Design',
        'AWS',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Al-Hiyal Software',
      period: '2018 - 2020',
      description: [
        'Developed web applications using C# and ASP.NET Web Forms with a focus on clean, maintainable code',
        'Implemented data access layers using Entity Framework and LINQ for efficient database operations',
        'Designed and optimized SQL Server databases including stored procedures and complex queries',
        'Gained strong fundamentals in software development lifecycle, version control with TFS, and team collaboration',
      ],
      achievements: [],
      techStack: [
        'C#',
        'ASP.NET',
        'Web Forms',
        'Entity Framework',
        'LINQ',
        'MSSQL',
        'TFS',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white dark:text-gray-900">
          Work Experience
        </h2>
        <p className="text-gray-400 dark:text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          5+ years building production web applications across fintech, enterprise, and SaaS — from frontend to backend.
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
