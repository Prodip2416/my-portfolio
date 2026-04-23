import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
          >
            Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 dark:text-gray-700 mb-8 px-2"
          >
            JS • TS • React • Next.js • NestJS | Open to Remote
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="relative overflow-hidden px-5 sm:px-8 py-2.5 sm:py-3 text-gray-900 rounded-full flex items-center gap-2 font-semibold group hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-cyan-500 rounded-full"
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
              className="px-5 sm:px-8 py-2.5 sm:py-3 border-2 border-cyan-500 text-cyan-400 dark:text-cyan-600 rounded-full hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
