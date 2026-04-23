import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import { trackPortfolioEvent } from '../utils/analytics';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const About = () => {
  const resumeBtnRef = useRef(null);
  const resumeInView = useInView(resumeBtnRef, { once: true, amount: 0.8 });

  return (
    <section
      id="about"
      className="py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeLeft} className="relative inline-block mb-8 group">
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
                                <svg class="w-32 h-32 text-cyan-400 dark:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-2xl">🚀</span>
                </div>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-900">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient">
                  Prodip Sarker
                </span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-600 mb-6">
                Full Stack Developer
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 dark:text-gray-500 mb-8">
                <MapPin className="w-5 h-5" />
                <span>Dhaka, Bangladesh</span>
                <span>•</span>
                <Calendar className="w-5 h-5" />
                <span>5+ Years Experience</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6"
            >
              <motion.div variants={fadeRight}>
                <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">
                  About Me
                </h3>
                <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed mb-4">
                  I'm a passionate{' '}
                  <span className="text-cyan-400 font-semibold">Full Stack Developer</span>{' '}
                  with{' '}
                  <span className="text-purple-400 font-semibold">5+ years of experience</span>{' '}
                  building scalable, production-ready web applications. I specialize in{' '}
                  <span className="text-cyan-400 font-semibold">JavaScript & TypeScript</span>{' '}
                  across the entire stack — from crafting dynamic UIs with{' '}
                  <span className="text-purple-400 font-semibold">React.js & Next.js</span>{' '}
                  to architecting robust backends with{' '}
                  <span className="text-cyan-400 font-semibold">NestJS</span>.
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                  I thrive on turning complex problems into clean, efficient solutions. Whether
                  it's building APIs, optimizing performance, or delivering pixel-perfect
                  interfaces — I bring full ownership to every layer of the stack. Always
                  learning, always shipping.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                <a
                  ref={resumeBtnRef}
                  href="/resume/Prodip Sarker.pdf"
                  download
                  className="relative overflow-hidden px-6 py-3 text-gray-900 rounded-full flex items-center gap-2 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                  onClick={() => trackPortfolioEvent.resumeDownload()}
                >
                  <motion.span
                    className="absolute inset-0 bg-cyan-500 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: resumeInView ? 1 : 0 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Let's Connect
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
