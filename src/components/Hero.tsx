import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
} from 'lucide-react';

const techStack = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'NestJS'];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 dark:bg-gray-100 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/60 to-gray-950/95 dark:from-gray-100/85 dark:via-gray-100/60 dark:to-gray-100/95 transition-colors duration-300" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute bottom-12 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-gray-950/50 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur-xl dark:border-cyan-700/20 dark:bg-white/70 dark:text-cyan-700"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            Available for Remote Work
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto mb-6 max-w-4xl bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400 bg-clip-text text-4xl font-black leading-tight text-transparent animate-gradient sm:text-5xl md:text-7xl"
          >
            Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="mx-auto mb-5 max-w-3xl px-2 text-base leading-8 text-gray-200 dark:text-gray-700 sm:text-xl md:text-2xl"
          >
            I build scalable React, Next.js, and NestJS applications with clean interfaces,
            reliable APIs, and production-ready ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="mb-8 flex flex-wrap justify-center gap-2.5"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-gray-200 shadow-sm shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:text-cyan-100 dark:border-gray-900/10 dark:bg-white/70 dark:text-gray-700 dark:hover:text-cyan-700"
              >
                <Code2 className="h-3.5 w-3.5 text-cyan-300 dark:text-cyan-700" />
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 font-bold text-gray-950 shadow-lg shadow-cyan-950/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 sm:px-8"
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-gray-950/35 px-5 py-3 font-semibold text-cyan-100 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:shadow-cyan-950/25 dark:border-cyan-700/25 dark:bg-white/70 dark:text-cyan-700 dark:hover:bg-cyan-500/10 sm:px-8"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-gray-950/60 px-4 py-3 text-left shadow-xl shadow-black/20 backdrop-blur-xl dark:border-gray-900/10 dark:bg-white/75 lg:block"
          >
            <div className="flex items-center gap-2 text-cyan-200 dark:text-cyan-700">
              <Layers3 className="h-4 w-4" />
              <span className="text-sm font-bold">Frontend Craft</span>
            </div>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">React / Next.js</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
            className="absolute -right-2 bottom-16 hidden rounded-2xl border border-white/10 bg-gray-950/60 px-4 py-3 text-left shadow-xl shadow-black/20 backdrop-blur-xl dark:border-gray-900/10 dark:bg-white/75 lg:block"
          >
            <div className="flex items-center gap-2 text-cyan-200 dark:text-cyan-700">
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-bold">Backend APIs</span>
            </div>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">NestJS / SQL</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
