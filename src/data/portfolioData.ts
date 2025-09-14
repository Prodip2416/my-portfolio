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
      'AWS',
    ],
  },

  // Projects - Add new projects here
  projects: [
    {
      title: 'Data Insights Hub',
      description:
        'Modern React dashboard with 8+ chart types, professional exports, theming, and responsive design for data visualization and business analytics',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: [
        'React',
        'TypeScript',
        'Chart.js',
        'D3.js',
        'Tailwind CSS',
        'Vite',
      ],
      demoLink: 'https://prodip2416.github.io/data-insights-hub/',
      githubLink: 'https://github.com/Prodip2416/data-insights-hub',
      featured: true,
      category: 'Full Stack',
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
      featured: true,
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
      featured: true,
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
    // Add new projects here as you create them
    // {
    //   title: 'Your New Project',
    //   description: 'Description of your new project',
    //   image: 'project-image-url',
    //   tech: ['React', 'Node.js', 'TypeScript'],
    //   demoLink: 'live-demo-url',
    //   githubLink: 'github-repo-url',
    //   featured: true,
    //   category: 'Full Stack',
    //   status: 'Live',
    // },
  ],

  // Experience - Update as you progress
  experience: [
    {
      role: 'Software Specialist',
      company: 'SSL Wireless',
      period: '2023 - Present',
      location: 'Dhaka, Bangladesh',
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
        'Chart.js',
        'Docker',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Apsis Solutions Ltd.',
      period: '2020 - 2023',
      location: 'Dhaka, Bangladesh',
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
        'Chart.js',
        'AWS',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Al-Hiyal Software',
      period: '2018 - 2020',
      location: 'Dhaka, Bangladesh',
      description: [
        'Developed robust web applications using C-Sharp and ASP.NET Web Forms',
        'Implemented efficient data access with Entity Framework and LINQ',
        'Designed and maintained SQL databases with complex queries',
        'Created dynamic web pages using ASP.NET Web Forms',
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
    awards: [
      {
        title: 'Outstanding Technical Leadership',
        company: 'SSL Wireless',
        year: '2023',
        description:
          'Recognized for exceptional leadership in technical projects and team mentoring',
      },
      {
        title: 'Rookie of the Year',
        company: 'Al-Hiyal Software',
        year: '2019',
        description:
          'Awarded for outstanding performance and rapid skill development',
      },
      {
        title: 'GitHub Pull Shark',
        company: 'GitHub',
        year: '2024',
        description:
          'Achieved Pull Shark achievement for significant contributions',
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

// Helper function to update skills
export const updateSkills = (category: string, skills: string[]) => {
  portfolioData.skills[category as keyof typeof portfolioData.skills] = skills;
};
