import React from 'react';
import { Quote, Star, ExternalLink, Award, Trophy, Target } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
  verified: boolean;
}

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => (
  <div
    className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl group"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < testimonial.rating
              ? 'text-yellow-400 fill-current'
              : 'text-gray-400'
          }`}
        />
      ))}
    </div>

    <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />

    <p className="text-gray-300 dark:text-gray-600 mb-6 italic leading-relaxed">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-white dark:text-gray-900">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);

const CertificationCard = ({
  cert,
  index,
}: {
  cert: Certification;
  index: number;
}) => (
  <div
    className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-white dark:text-gray-900">
            {cert.name}
          </h4>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {cert.issuer}
          </p>
        </div>
      </div>
      {cert.verified && (
        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">
          Verified
        </span>
      )}
    </div>

    <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">{cert.date}</p>

    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 dark:hover:text-cyan-500 transition-colors group/link"
    >
      <ExternalLink className="w-4 h-4 group-hover/link:animate-bounce" />
      View Certificate
    </a>
  </div>
);

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Startup Founder',
      company: 'TechStart Inc.',
      content:
        'Outstanding work! Prodip built our entire e-commerce platform from scratch. His React and Node.js expertise saved us months of development time. Communication was excellent throughout the project. Will definitely hire again!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Product Manager',
      company: 'Digital Solutions LLC',
      content:
        'Great developer with solid technical skills. Prodip delivered our dashboard project on time with good code quality. Minor communication delays but overall satisfied with the work. Would recommend for React projects.',
      rating: 4,
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'CTO',
      company: 'InnovateTech',
      content:
        "Prodip is a true professional. He took our complex requirements and delivered a flawless React application with TypeScript. His code is clean, well-documented, and scalable. The best developer I've worked with on Upwork!",
      rating: 5,
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      role: 'Business Owner',
      company: 'E-commerce Plus',
      content:
        'Very good work! Prodip built our full-stack application with React, Node.js, and MySQL. He was responsive and professional. The project was completed on time and within budget. Minor revisions needed but overall happy.',
      rating: 4,
    },
    {
      id: 5,
      name: 'James Anderson',
      role: 'Project Lead',
      company: 'WebDev Solutions',
      content:
        "Excellent developer! Prodip's expertise in React, Redux, and modern web technologies is impressive. He delivered our project with excellent code quality and great communication. Will definitely work with him again!",
      rating: 5,
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://www.hackerrank.com/profile/prodip2416',
      verified: true,
    },
    {
      name: 'React (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://www.hackerrank.com/profile/prodip2416',
      verified: true,
    },
    {
      name: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://www.hackerrank.com/profile/prodip2416',
      verified: true,
    },
    {
      name: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://www.hackerrank.com/profile/prodip2416',
      verified: true,
    },
    {
      name: 'Frontend Developer (React)',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://www.hackerrank.com/profile/prodip2416',
      verified: true,
    },
    {
      name: 'Full Stack Developer',
      issuer: 'Upwork',
      date: '2023',
      link: 'https://www.upwork.com/freelancers/~013f1a74f416476c6a',
      verified: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white dark:text-gray-900 animate-fade-in">
            Testimonials & Certifications
          </h2>
          <p className="text-gray-400 dark:text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-slide-up-delay-1">
            What colleagues say about my work and my verified professional
            certifications
          </p>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white dark:text-gray-900 flex items-center justify-center gap-2">
              <Quote className="w-6 h-6 text-cyan-400" />
              Client Testimonials
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white dark:text-gray-900 flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.name} cert={cert} index={index} />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white dark:text-gray-900">
                50+
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-600">
                Projects Completed
              </div>
            </div>
            <div className="text-center bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white dark:text-gray-900">
                4.6
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-600">
                Upwork Rating
              </div>
            </div>
            <div className="text-center bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white dark:text-gray-900">
                100%
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-600">
                Job Success Rate
              </div>
            </div>
            <div className="text-center bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200">
              <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white dark:text-gray-900">
                4+
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-600">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
