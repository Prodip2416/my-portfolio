import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  Code2,
  Download,
  Eye,
  Layers3,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';
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

const focusAreas = [
  {
    title: 'Frontend Craft',
    description: 'Clean, responsive interfaces with React, Next.js, and TypeScript.',
    icon: Layers3,
  },
  {
    title: 'Backend Architecture',
    description: 'Scalable APIs, auth flows, databases, and production-ready services.',
    icon: Server,
  },
  {
    title: 'Ownership Mindset',
    description: 'From unclear problems to shipped features with practical execution.',
    icon: Briefcase,
  },
];

const About = () => {
  const resumeBtnRef = useRef(null);
  const resumeInView = useInView(resumeBtnRef, { once: true, amount: 0.8 });
  const [profileImageFailed, setProfileImageFailed] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gray-950 dark:bg-gray-100 transition-colors duration-300"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/10" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeLeft} className="relative mx-auto mb-6 w-fit md:-mt-4 lg:mx-0 lg:-mt-6">
                <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-cyan-950/20 backdrop-blur-xl dark:border-gray-900/10 dark:bg-white/55 dark:shadow-gray-300/30" />
                <div className="group relative w-48 rounded-[1.75rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 sm:w-60 lg:w-72">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.45rem] bg-gray-900 transition-colors duration-300 dark:bg-gray-200">
                    {profileImageFailed ? (
                      <div className="flex h-full w-full items-center justify-center bg-gray-900 dark:bg-gray-200">
                        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 sm:h-48 sm:w-48">
                          <Code2 className="h-20 w-20 text-cyan-400 dark:text-cyan-600 sm:h-28 sm:w-28" />
                        </div>
                      </div>
                    ) : (
                      <img
                        src="/profile.jpg"
                        alt="Prodip Sarker - Full Stack Developer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setProfileImageFailed(true)}
                      />
                    )}
                  </div>
                </div>

                <div className="absolute -right-4 top-5 hidden rounded-2xl border border-cyan-300/25 bg-gray-950/85 px-4 py-3 text-left shadow-xl shadow-cyan-950/30 backdrop-blur-xl dark:border-cyan-700/20 dark:bg-white/90 sm:block">
                  <div className="flex items-center gap-2 text-cyan-300 dark:text-cyan-700">
                    <Code2 className="h-4 w-4" />
                    <span className="text-sm font-bold">Full Stack</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">React to NestJS</p>
                </div>

                <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 bg-gray-950/90 px-4 py-3 text-cyan-100 shadow-xl shadow-black/20 backdrop-blur-xl dark:border-gray-900/10 dark:bg-white/90 dark:text-cyan-700 lg:left-auto lg:right-4 lg:translate-x-0">
                  <Sparkles className="h-4 w-4" />
                  <span className="whitespace-nowrap text-sm font-bold">Open to Remote</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700">
                <Sparkles className="h-4 w-4" />
                About Me
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
              <motion.div variants={fadeRight} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-gray-900/10 dark:bg-white/70 dark:shadow-gray-300/30 sm:p-6">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />

                <h3 className="relative mb-4 text-2xl font-bold text-white dark:text-gray-900">
                  Building clean products across the stack
                </h3>
                <div className="relative space-y-4">
                  <p className="text-base leading-8 text-gray-300 dark:text-gray-600 sm:text-lg">
                    I'm a passionate{' '}
                    <span className="text-cyan-300 dark:text-cyan-700 font-semibold">Full Stack Developer</span>{' '}
                    with{' '}
                    <span className="text-purple-300 dark:text-purple-700 font-semibold">5+ years of experience</span>{' '}
                    building scalable, production-ready web applications. I specialize in{' '}
                    <span className="text-cyan-300 dark:text-cyan-700 font-semibold">JavaScript & TypeScript</span>{' '}
                    across the entire stack, from dynamic UIs with{' '}
                    <span className="text-purple-300 dark:text-purple-700 font-semibold">React.js & Next.js</span>{' '}
                    to robust backends with{' '}
                    <span className="text-cyan-300 dark:text-cyan-700 font-semibold">NestJS</span>.
                  </p>
                  <p className="text-base leading-8 text-gray-300 dark:text-gray-600 sm:text-lg">
                    I enjoy turning complex problems into clean, efficient solutions. Whether
                    it's building APIs, optimizing performance, or delivering polished
                    interfaces, I bring full ownership to every layer of the stack.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {focusAreas.map(({ title, description, icon: Icon }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-gray-900/45 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-gray-900/60 dark:border-gray-900/10 dark:bg-white/70 dark:hover:border-cyan-700/25 dark:hover:bg-white"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition-transform duration-300 group-hover:scale-105 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white dark:text-gray-900">{title}</h4>
                      <p className="mt-1 text-sm leading-6 text-gray-400 dark:text-gray-600">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                <a
                  ref={resumeBtnRef}
                  href="/resume/Prodip Sarker.pdf"
                  download
                  className="relative overflow-hidden rounded-full px-6 py-3 text-gray-950 flex items-center gap-2 font-bold shadow-lg shadow-cyan-950/25 hover:scale-105 hover:shadow-cyan-500/25 transition-all duration-300 group"
                  onClick={() => trackPortfolioEvent.resumeDownload()}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"
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
                  href="/resume/Prodip Sarker.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-gray-100 transition-all duration-300 hover:scale-105 hover:border-cyan-300/45 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-950/20 dark:border-gray-900/10 dark:bg-white/70 dark:text-gray-800 dark:hover:border-cyan-700/25 dark:hover:bg-cyan-50 dark:hover:text-cyan-800"
                  onClick={() => trackPortfolioEvent.resumeView()}
                >
                  <Eye className="h-5 w-5" />
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-200 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/15 hover:shadow-lg hover:shadow-cyan-950/20 dark:border-cyan-700/25 dark:bg-cyan-500/10 dark:text-cyan-700 dark:hover:bg-cyan-500/15"
                >
                  Let's Connect
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
