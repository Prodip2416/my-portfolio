import { motion, Variants } from 'framer-motion';
import { Github, GitBranch, Star, Calendar, ExternalLink } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';
import { LoadingSpinner, ErrorState } from './LoadingStates';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const GitHubStats = () => {
  const { user, repos, loading, error } = useGitHub();

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-gray-900">
              GitHub Activity
            </h2>
            <div className="flex justify-center">
              <LoadingSpinner size="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-gray-900">
              GitHub Activity
            </h2>
            <ErrorState
              title="Failed to load GitHub data"
              message="Unable to fetch your GitHub statistics. Please try again later."
            />
          </div>
        </div>
      </section>
    );
  }

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const yearsOnGitHub = user
    ? Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365))
    : 0;

  return (
    <section className="pt-20 pb-10 bg-gray-900 dark:bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-gray-900"
          >
            GitHub Activity
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.a
              variants={scaleIn}
              href={user?.html_url || 'https://github.com/prodip2416'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white dark:text-gray-900">Repositories</h3>
              </div>
              <div className="text-3xl font-bold text-cyan-400 dark:text-cyan-600 mb-2">{user?.public_repos || 0}</div>
              <p className="text-gray-400 dark:text-gray-600 text-sm">Public repositories</p>
            </motion.a>

            <motion.a
              variants={scaleIn}
              href={user?.html_url || 'https://github.com/prodip2416'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white dark:text-gray-900">Stars</h3>
              </div>
              <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-600 mb-2">{totalStars}</div>
              <p className="text-gray-400 dark:text-gray-600 text-sm">Total stars received</p>
            </motion.a>

            <motion.a
              variants={scaleIn}
              href={`${user?.html_url || 'https://github.com/prodip2416'}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white dark:text-gray-900">Followers</h3>
              </div>
              <div className="text-3xl font-bold text-green-400 dark:text-green-600 mb-2">{user?.followers || 0}</div>
              <p className="text-gray-400 dark:text-gray-600 text-sm">GitHub followers</p>
            </motion.a>

            <motion.a
              variants={scaleIn}
              href={user?.html_url || 'https://github.com/prodip2416'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white dark:text-gray-900">Experience</h3>
              </div>
              <div className="text-3xl font-bold text-purple-400 dark:text-purple-600 mb-2">{yearsOnGitHub}+</div>
              <p className="text-gray-400 dark:text-gray-600 text-sm">Years on GitHub</p>
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200"
          >
            <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-4 text-center">
              Contribution Activity
            </h3>
            <div className="flex justify-center">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=prodip2416&theme=react-dark&hide_border=true&area=true"
                alt="GitHub Activity Graph"
                loading="lazy"
                className="w-full max-w-4xl rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.parentElement!.innerHTML =
                    '<p class="text-gray-400 text-center py-8">Activity graph unavailable. <a href="https://github.com/prodip2416" target="_blank" class="text-cyan-400 hover:underline">View on GitHub →</a></p>';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200"
          >
            <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-4 text-center">
              GitHub Statistics
            </h3>
            <div className="flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=prodip2416&show_icons=true&theme=react&hide_border=true&count_private=true"
                alt="GitHub Stats"
                className="w-full max-w-2xl rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/prodip2416"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 text-gray-900 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <motion.span
                className="absolute inset-0 bg-cyan-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5 group-hover:animate-bounce" />
                View All Repositories
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
