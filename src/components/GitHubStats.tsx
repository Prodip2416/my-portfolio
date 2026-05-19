import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  Code2,
  ExternalLink,
  Github,
  RefreshCcw,
  Star,
  Users,
} from 'lucide-react';
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

const StatCard = ({
  icon: Icon,
  label,
  value,
  description,
  href,
}: {
  icon: typeof Github;
  label: string;
  value: string | number;
  description: string;
  href: string;
}) => (
  <motion.a
    variants={scaleIn}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block min-h-[178px] border-b border-gray-800 bg-gray-950/70 p-5 transition-all duration-300 hover:z-10 hover:border-cyan-400/50 hover:bg-gray-900/95 hover:shadow-xl hover:shadow-cyan-950/20 dark:border-gray-200 dark:bg-white dark:hover:border-cyan-400 dark:hover:bg-cyan-50/40 sm:p-6 md:border-b-0 md:border-r md:last:border-r-0"
  >
    <div className="mb-6 flex items-start justify-between gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400 group-hover:text-gray-950 dark:bg-cyan-50 dark:text-cyan-700 dark:group-hover:bg-cyan-500 dark:group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300 dark:text-gray-400 dark:group-hover:text-cyan-700" />
    </div>

    <div className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 dark:text-gray-950 dark:group-hover:text-cyan-700">
      {value}
    </div>
    <h3 className="mt-1 text-sm font-bold uppercase tracking-wide text-gray-300 dark:text-gray-700">
      {label}
    </h3>
    <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-300 dark:text-gray-600 dark:group-hover:text-gray-700">
      {description}
    </p>
  </motion.a>
);

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
  const githubUrl = user?.html_url || 'https://github.com/prodip2416';
  const statCards = [
    {
      icon: Github,
      label: 'Repositories',
      value: user?.public_repos || 0,
      description: 'Public open-source work',
      href: githubUrl,
    },
    {
      icon: Star,
      label: 'Stars',
      value: totalStars,
      description: 'Community recognition',
      href: githubUrl,
    },
    {
      icon: Users,
      label: 'Followers',
      value: user?.followers || 0,
      description: 'Developer network',
      href: `${githubUrl}?tab=followers`,
    },
    {
      icon: Calendar,
      label: 'Experience',
      value: `${yearsOnGitHub}+`,
      description: 'Years active on GitHub',
      href: githubUrl,
    },
  ];

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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8 overflow-hidden rounded-lg border border-gray-800 bg-gray-950/80 shadow-2xl shadow-black/20 dark:border-gray-200 dark:bg-white dark:shadow-gray-200/70"
          >
            <div className="flex flex-col gap-5 border-b border-gray-800 p-5 dark:border-gray-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <img
                  src={user?.avatar_url || 'https://github.com/prodip2416.png'}
                  alt={user?.name || 'Prodip Sarker'}
                  className="h-16 w-16 rounded-lg border border-cyan-400/20 object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-cyan-300 dark:text-cyan-700">
                    GitHub Profile
                  </p>
                  <h3 className="text-xl font-bold text-white dark:text-gray-950">
                    {user?.name || 'Prodip Sarker'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-600">
                    @{user?.login || 'prodip2416'}
                  </p>
                </div>
              </div>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-gray-950 transition-all duration-300 hover:bg-cyan-300"
              >
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-4"
            >
              {statCards.map((card) => (
                <StatCard key={card.label} {...card} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 overflow-hidden rounded-lg border border-gray-800 bg-gray-950/80 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-cyan-400/40 dark:border-gray-200 dark:bg-white dark:shadow-gray-200/70"
          >
            <div className="flex flex-col gap-5 border-b border-gray-800 p-5 dark:border-gray-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300 dark:bg-cyan-50 dark:text-cyan-700">
                  <RefreshCcw className="h-3.5 w-3.5" />
                  Live GitHub graph
                </div>
                <h3 className="text-xl font-bold text-white dark:text-gray-950">
                  Contribution Activity
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-600">
                  Recent coding rhythm and public contribution flow.
                </p>
              </div>

              <a
                href="https://github.com/prodip2416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-sm font-bold text-gray-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 dark:border-gray-200 dark:text-gray-700 dark:hover:border-cyan-500 dark:hover:text-cyan-700"
              >
                View Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="p-5 sm:p-6">
              <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/80 p-3 dark:border-gray-200 dark:bg-gray-950">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=prodip2416&theme=react-dark&hide_border=true&area=true"
                  alt="GitHub Activity Graph"
                  loading="lazy"
                  className="w-full rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.innerHTML =
                      '<div class="flex flex-col items-center justify-center gap-3 px-4 py-12 text-center"><div class="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div><p class="text-base font-bold text-white">Activity graph unavailable</p><a href="https://github.com/prodip2416" target="_blank" class="text-sm font-semibold text-cyan-300 hover:text-cyan-200">View activity on GitHub</a></div>';
                  }}
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  'Daily practice',
                  'Public contributions',
                  'Active repositories',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-200 dark:bg-cyan-50 dark:text-cyan-700"
                  >
                    <Code2 className="h-4 w-4" />
                    {item}
                  </div>
                ))}
              </div>
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
