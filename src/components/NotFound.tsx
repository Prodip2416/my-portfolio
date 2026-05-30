import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Briefcase, Home, Mail, SearchX } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const NotFound = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 transition-colors duration-300 dark:bg-gray-50 sm:px-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 dark:opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-4xl items-center justify-center"
      >
        <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-gray-900/75 shadow-2xl shadow-black/30 backdrop-blur dark:border-gray-200 dark:bg-white dark:shadow-gray-200/70">
          <div className="h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400" />
          <div className="p-6 text-center sm:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 dark:bg-cyan-50 dark:text-cyan-700">
              <SearchX className="h-8 w-8" />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200 dark:text-cyan-700">
              404
            </p>
            <h1 className="text-3xl font-bold text-white dark:text-gray-950 sm:text-5xl">
              This page is not here.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 dark:text-gray-600">
              The link may be outdated, or the page may have moved. You can jump back to the portfolio or go straight to the sections that matter.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-gray-950 transition-all duration-300 hover:bg-emerald-300 hover:shadow-lg hover:shadow-cyan-950/20"
              >
                <Home className="h-4 w-4" />
                Back Home
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-gray-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200 dark:border-gray-200 dark:text-gray-700 dark:hover:border-cyan-500 dark:hover:text-cyan-700"
              >
                <Briefcase className="h-4 w-4" />
                View Projects
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-gray-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200 dark:border-gray-200 dark:text-gray-700 dark:hover:border-cyan-500 dark:hover:text-cyan-700"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="mx-auto mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-cyan-200 dark:text-gray-600 dark:hover:text-cyan-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Go back
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default NotFound;
