import {
  Download,
  MapPin,
  Calendar,
  Award,
  Users,
  Zap,
  FolderOpen,
} from 'lucide-react';
import { trackPortfolioEvent } from '../utils/analytics';

const About = () => {
  const stats = [
    { icon: FolderOpen, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Team Members Mentored', value: '5+' },
    { icon: Zap, label: 'Performance Improvement', value: '40%' },
    { icon: Award, label: 'Awards Received', value: '3' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Basic Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8 group">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse-slow group-hover:animate-glow">
                  <div className="w-full h-full rounded-full overflow-hidden transition-colors duration-300">
                    <img
                      src="/profile.jpg"
                      alt="Prodip Sarker - Software Specialist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onLoad={() => console.log('✅ Profile image loaded successfully!')}
                      onError={(e) => {
                        console.log('❌ Profile image failed to load');
                        console.log('Trying to load:', e.target.src);
                        console.log('Full URL:', window.location.href + 'profile.jpg');
                        // Fallback to icon if image not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gray-900 dark:bg-gray-200 flex items-center justify-center">
                              <div class="w-60 h-60 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <svg class="w-32 h-32 text-cyan-400 dark:text-cyan-600 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce-slow group-hover:animate-wiggle">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-4 text-white dark:text-gray-900 animate-fade-in">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient">
                  Prodip Sarker
                </span>
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-600 mb-6 animate-slide-up-delay-1">
                Software Specialist at SSL Wireless
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 dark:text-gray-500 mb-8 animate-slide-up-delay-2">
                <MapPin className="w-5 h-5" />
                <span>Dhaka, Bangladesh</span>
                <span>•</span>
                <Calendar className="w-5 h-5" />
                <span>4+ Years Experience</span>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-up-delay-3">
              <div>
                <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">
                  About Me
                </h3>
                <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed mb-4">
                  I'm a passionate{' '}
                  <span className="text-cyan-400 font-semibold">
                    Full Stack Developer
                  </span>{' '}
                  with 4+ years of experience building scalable web
                  applications. I specialize in{' '}
                  <span className="text-purple-400 font-semibold">
                    React, Node.js, and TypeScript
                  </span>
                  , and I love creating solutions that make a real impact.
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                  Currently working as a{' '}
                  <span className="text-cyan-400 font-semibold">
                    Software Specialist at SSL Wireless
                  </span>
                  , where I lead development teams and architect
                  enterprise-scale applications. I'm passionate about mentoring
                  junior developers and staying up-to-date with the latest
                  technologies.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 dark:bg-gray-200 p-4 rounded-lg border border-gray-800 dark:border-gray-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-xl group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-6 h-6 text-cyan-400 dark:text-cyan-600 group-hover:animate-spin-slow" />
                      <div>
                        <div className="text-2xl font-bold text-white dark:text-gray-900 group-hover:text-cyan-400 dark:group-hover:text-cyan-600 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 dark:text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume/Prodip_Sarker_Resume.pdf"
                  download
                  className="px-6 py-3 bg-cyan-500 text-gray-900 rounded-full hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 font-semibold hover:scale-105 hover:shadow-lg group"
                  onClick={() => trackPortfolioEvent.resumeDownload()}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <span className="group-hover:animate-pulse">
                    Let's Connect
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
