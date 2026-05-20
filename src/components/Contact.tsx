import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { trackPortfolioEvent } from '../utils/analytics';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const contactActions = [
  {
    label: 'Email',
    value: 'prodip.sarker.cse@gmail.com',
    href: 'mailto:prodip.sarker.cse@gmail.com',
    icon: Mail,
    action: 'Start a conversation',
    onClick: () => trackPortfolioEvent.emailClick(),
  },
  {
    label: 'LinkedIn',
    value: 'Professional network',
    href: 'https://www.linkedin.com/in/prodip2416/',
    icon: Linkedin,
    action: 'Connect professionally',
    external: true,
    onClick: () => trackPortfolioEvent.linkedinClick(),
  },
  {
    label: 'GitHub',
    value: 'Open-source work',
    href: 'https://github.com/prodip2416',
    icon: Github,
    action: 'Explore repositories',
    external: true,
    onClick: () => trackPortfolioEvent.githubClick(),
  },
  {
    label: 'WhatsApp',
    value: '+880 1744 610 807',
    href: 'tel:+8801744610807',
    icon: Phone,
    action: 'Quick call or message',
  },
];

const availability = [
  { icon: Clock3, text: 'Usually responds within 24 hours' },
  { icon: MapPin, text: 'Dhaka, Bangladesh' },
  { icon: Globe2, text: 'Remote opportunities worldwide' },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-20 transition-colors duration-300 dark:bg-gray-50"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 dark:opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-950/20 dark:bg-cyan-50 dark:text-cyan-700">
            <Sparkles className="h-4 w-4" />
            Open To Collaborate
          </span>
          <h2 className="text-3xl font-bold text-white dark:text-gray-950 sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 dark:text-gray-600 sm:text-base">
            Have a product idea, frontend challenge, or full-stack role? I am always happy to talk through the work and see where I can help.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="overflow-hidden rounded-lg border border-white/10 bg-gray-900/70 shadow-2xl shadow-black/30 backdrop-blur dark:border-gray-200 dark:bg-white dark:shadow-gray-200/70"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeUp}
              className="relative min-h-[430px] border-b border-white/10 p-6 dark:border-gray-200 sm:p-8 lg:border-b-0 lg:border-r"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400" />

              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/20 dark:bg-cyan-50 dark:text-cyan-700">
                    <Send className="h-7 w-7" />
                  </div>

                  <h3 className="max-w-md text-3xl font-bold leading-tight text-white dark:text-gray-950 sm:text-4xl">
                    Let's build something clean, fast, and useful.
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-8 text-gray-400 dark:text-gray-600">
                    I can help turn complex workflows into polished React, Next.js, and NestJS experiences that feel good to use and easy to maintain.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:prodip.sarker.cse@gmail.com"
                      className="group inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-gray-950 transition-all duration-300 hover:bg-emerald-300 hover:shadow-lg hover:shadow-cyan-950/20"
                      onClick={() => trackPortfolioEvent.emailClick()}
                    >
                      Email Me
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prodip2416/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-gray-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200 dark:border-gray-200 dark:text-gray-700 dark:hover:border-cyan-500 dark:hover:text-cyan-700"
                      onClick={() => trackPortfolioEvent.linkedinClick()}
                    >
                      LinkedIn
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  {availability.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-gray-300 dark:border-gray-200 dark:bg-gray-50 dark:text-gray-600"
                    >
                      <Icon className="h-4 w-4 text-cyan-200 dark:text-cyan-700" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4 px-2">
                <div>
                  <p className="text-sm font-semibold text-cyan-200 dark:text-cyan-700">
                    Choose a channel
                  </p>
                  <h3 className="text-xl font-bold text-white dark:text-gray-950">
                    Reach me directly
                  </h3>
                </div>
                <MessageCircle className="h-6 w-6 text-cyan-200 dark:text-cyan-700" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactActions.map(({ label, value, href, icon: Icon, action, external, onClick }) => (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group relative min-h-[168px] overflow-hidden rounded-lg border border-white/10 bg-gray-950/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-gray-950 hover:shadow-xl hover:shadow-cyan-950/25 dark:border-gray-200 dark:bg-gray-50 dark:hover:border-cyan-500 dark:hover:bg-white"
                    onClick={onClick}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-all duration-300 group-hover:bg-cyan-300 group-hover:text-gray-950 dark:bg-cyan-50 dark:text-cyan-700 dark:group-hover:bg-cyan-500 dark:group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200 dark:text-gray-400 dark:group-hover:text-cyan-700" />
                    </div>

                    <h4 className="mt-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-200 dark:text-gray-950 dark:group-hover:text-cyan-700">
                      {label}
                    </h4>
                    <p className="mt-1 break-words text-sm leading-6 text-gray-500 dark:text-gray-600">
                      {value}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-gray-300 dark:text-gray-700">
                      {action}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
