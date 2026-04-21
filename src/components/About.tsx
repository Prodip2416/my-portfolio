import {
  Download,
  MapPin,
  Calendar,
} from 'lucide-react';
import { trackPortfolioEvent } from '../utils/analytics';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image and Basic Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8 group">
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse-slow group-hover:animate-glow">
                  <div className="w-full h-full rounded-full overflow-hidden transition-colors duration-300">
                    <img
                      src="/profile.jpg"
                      alt="Prodip Sarker - Full Stack Developer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gray-900 dark:bg-gray-200 flex items-center justify-center">
                              <div class="w-60 h-60 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
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

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-900 animate-fade-in">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient">
                  Prodip Sarker
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-600 mb-6 animate-slide-up-delay-1">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 dark:text-gray-500 mb-8 animate-slide-up-delay-2">
                <MapPin className="w-5 h-5" />
                <span>Dhaka, Bangladesh</span>
                <span>•</span>
                <Calendar className="w-5 h-5" />
                <span>5+ Years Experience</span>
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
                  with{' '}
                  <span className="text-purple-400 font-semibold">
                    5+ years of experience
                  </span>{' '}
                  building scalable, production-ready web applications. I
                  specialize in{' '}
                  <span className="text-cyan-400 font-semibold">
                    JavaScript & TypeScript
                  </span>{' '}
                  across the entire stack — from crafting dynamic UIs with{' '}
                  <span className="text-purple-400 font-semibold">
                    React.js & Next.js
                  </span>{' '}
                  to architecting robust backends with{' '}
                  <span className="text-cyan-400 font-semibold">NestJS</span>.
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                  I thrive on turning complex problems into clean, efficient
                  solutions. Whether it's building APIs, optimizing performance,
                  or delivering pixel-perfect interfaces — I bring full ownership
                  to every layer of the stack. Always learning, always shipping.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume/Prodip Sarker.pdf"
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
