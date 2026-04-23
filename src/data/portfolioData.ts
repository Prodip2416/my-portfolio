// Portfolio Data - Easy Day-by-Day Updates
// Update this file whenever you want to add new projects, skills, or achievements

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Prodip Sarker',
    title: 'Software Specialist at SSL Wireless',
    location: 'Dhaka, Bangladesh',
    experience: '4+ Years',
    email: 'prodip.sarker.cse@gmail.com',
    linkedin: 'https://www.linkedin.com/in/prodip2416/',
    github: 'https://github.com/prodip2416',
    twitter: 'https://twitter.com/prodip_diu',
    facebook: 'https://facebook.com/aushomapto.prodip',
    portfolio: 'https://sarker-portfolio.netlify.app/',
  },

  // Skills - Add new skills here
  skills: {
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
      'Chart.js',
      'D3.js',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'NestJS',
      'RESTful APIs',
      'MySQL',
      'Authentication',
      'Authorization',
      'C#',
      'ASP.NET',
      'Entity Framework',
    ],
    tools: [
      'Git',
      'VS Code',
      'npm/yarn',
      'Webpack',
      'Docker',
      'Jest',
      'CI/CD',
      'TFS',
      'Microsoft Azure',
    ],
  },

  // Projects - Add new projects here
  projects: [
    {
      title: 'LinguaGuard',
      description:
        'MCP server for i18n management — detect missing keys, unused translations, and sync across languages via Claude AI.',
      image:
        'https://repository-images.githubusercontent.com/1201324605/8fbceb02-89f9-47f4-b571-2a1939a3811b',
      tech: ['TypeScript', 'MCP', 'Claude AI', 'i18n', 'Node.js'],
      demoLink: 'https://mcpize.com/mcp/linguaguard',
      githubLink: 'https://github.com/Prodip2416/linguaguard',
      featured: true,
      category: 'AI',
      status: 'Live',
    },
    {
      title: 'Tailwind Kit',
      description:
        'Component library with 80+ React elements built with Tailwind CSS, featuring responsive design and dark mode functionality.',
      image:
        'https://repository-images.githubusercontent.com/1074318925/ac0c1106-a0c7-496f-b709-ddc8e0d4da53',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Storybook'],
      demoLink: 'https://prodip2416.github.io/tailwind-kit/',
      githubLink: 'https://github.com/Prodip2416/tailwind-kit',
      featured: true,
      category: 'Frontend',
      status: 'Live',
    },
    {
      title: 'NestJS Auth Kit',
      description:
        'Minimal NestJS Auth Kit for building JWT-protected REST APIs with a clean modular architecture.',
      image:
        'https://repository-images.githubusercontent.com/1166701976/96cfa807-94af-4247-8fba-86007b1b3e08',
      tech: ['NestJS', 'TypeScript', 'JWT', 'REST API', 'PostgreSQL'],
      demoLink: '',
      githubLink: 'https://github.com/Prodip2416/nestjs-auth-kit',
      featured: true,
      category: 'Backend',
      status: 'Live',
    },
    {
      title: 'AI Text Summarization',
      description:
        'React application utilizing three AI models for text summarization, including sentiment analysis and export functionality.',
      image:
        'https://repository-images.githubusercontent.com/1074235421/6768a7b8-d896-44a6-9b69-2ac30a605ebf',
      tech: ['React', 'JavaScript', 'AI APIs', 'Sentiment Analysis'],
      demoLink: 'https://prodip2416.github.io/ai-text-summarization/',
      githubLink: 'https://github.com/Prodip2416/ai-text-summarization',
      featured: true,
      category: 'AI',
      status: 'Live',
    },
    {
      title: 'Data Insights Hub',
      description:
        'Modern React dashboard with 8+ chart types, professional exports, theming, and responsive design for data visualization and business analytics',
      image:
        'https://repository-images.githubusercontent.com/1055931234/f7e2ade7-abd7-400a-9827-d5944bfe30bd',
      tech: ['React', 'TypeScript', 'Chart.js', 'D3.js', 'Tailwind CSS', 'Vite'],
      demoLink: 'https://prodip2416.github.io/data-insights-hub/',
      githubLink: 'https://github.com/Prodip2416/data-insights-hub',
      featured: true,
      category: 'Frontend',
      status: 'Live',
    },
    {
      title: 'My Portfolio',
      description:
        'Personal portfolio displaying 5+ years of expertise in JavaScript, TypeScript, React.js, Next.js, NestJS, and modern frontend development.',
      image:
        'https://repository-images.githubusercontent.com/308957560/ec643ef6-7627-42db-b7c0-289ded8298c8',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      demoLink: 'https://sarker-portfolio.netlify.app/',
      githubLink: 'https://github.com/Prodip2416/my-portfolio',
      featured: true,
      category: 'Frontend',
      status: 'Live',
    },
    {
      title: 'E-commerce Starter',
      description:
        'A comprehensive e-commerce solution with real-time inventory management, payment integration, and admin dashboard',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'React'],
      demoLink: 'https://github.com/Prodip2416/e-com-service',
      githubLink: 'https://github.com/Prodip2416/e-com-service',
      featured: false,
      category: 'Backend',
      status: 'Live',
    },
    {
      title: 'RRAT Stack Boilerplate',
      description:
        'Cutting-edge boilerplate with React, Redux, Ant Design, Tailwind CSS - your all-in-one foundation for building sleek, scalable applications',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Redux', 'Ant Design', 'Tailwind CSS', 'JavaScript'],
      demoLink: 'https://prodip2416.github.io/RRAT_Stack/',
      githubLink: 'https://github.com/Prodip2416/RRAT_Stack',
      featured: false,
      category: 'Frontend',
      status: 'Live',
    },
    {
      title: 'All About Node.js',
      description:
        'Comprehensive Node.js learning resource covering all topics with realistic projects and best practices',
      image:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB'],
      demoLink: 'https://github.com/Prodip2416/all-about-nodejs',
      githubLink: 'https://github.com/Prodip2416/all-about-nodejs',
      featured: false,
      category: 'Learning',
      status: 'Live',
    },
  ],

  // Experience - Update as you progress
  experience: [
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
        'Microsoft Azure',
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
  ],

  // Achievements and Metrics
  achievements: {
    stats: [
      {
        icon: 'TrendingUp',
        title: 'Performance Optimization',
        description: 'Reduced application load time',
        value: '40%',
        color: 'bg-green-500',
      },
      {
        icon: 'Target',
        title: 'Project Delivery',
        description: 'Projects delivered ahead of schedule',
        value: '5',
        color: 'bg-blue-500',
      },
      {
        icon: 'Code2',
        title: 'Code Coverage',
        description: 'Automated testing coverage achieved',
        value: '90%',
        color: 'bg-purple-500',
      },
      {
        icon: 'Users',
        title: 'Team Mentoring',
        description: 'Junior developers mentored',
        value: '15+',
        color: 'bg-orange-500',
      },
      {
        icon: 'Star',
        title: 'Client Satisfaction',
        description: 'Satisfaction score improvement',
        value: '95%',
        color: 'bg-yellow-500',
      },
      {
        icon: 'Zap',
        title: 'Bug Reduction',
        description: 'Reduction in bug reports',
        value: '60%',
        color: 'bg-red-500',
      },
    ],
  },

  // GitHub Stats
  github: {
    username: 'prodip2416',
    repositories: 61,
    stars: 1,
    followers: 17,
    following: 0,
  },
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return portfolioData.projects.filter((project) => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return portfolioData.projects.filter(
    (project) => project.category === category
  );
};

// Helper function to add new project
export const addNewProject = (project: any) => {
  portfolioData.projects.unshift(project); // Add to beginning
};

export const getExperience = () => portfolioData.experience;

// Helper function to update skills
export const updateSkills = (category: string, skills: string[]) => {
  portfolioData.skills[category as keyof typeof portfolioData.skills] = skills;
};
