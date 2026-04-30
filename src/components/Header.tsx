import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  LucideGithub,
  Linkedin,
  Mail,
  Code2,
  Layers,
  Terminal,
  Briefcase,
  User,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const emailAddress = 'prodip.sarker.cse@gmail.com';
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

const menuItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code2 },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: Layers },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionIds = ['home', ...menuItems.map(({ href }) => href.slice(1))];

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16);

      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return current;
        }

        const sectionTop = section.offsetTop - 130;

        return window.scrollY >= sectionTop ? sectionId : current;
      }, 'home');

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsContactMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setIsEmailCopied(true);

    window.setTimeout(() => setIsEmailCopied(false), 1800);
  };

  const handleContactLink = () => {
    setActiveSection('contact');
    setIsContactMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={`container mx-auto transition-all duration-500 ${
          hasScrolled ? 'max-w-6xl' : 'max-w-7xl'
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-500 ${
            hasScrolled
              ? 'border-cyan-400/20 bg-gray-950/90 shadow-2xl shadow-cyan-950/30 dark:border-cyan-600/20 dark:bg-white/90 dark:shadow-gray-300/30'
              : 'border-white/10 bg-gray-950/60 shadow-lg shadow-black/20 dark:border-gray-900/10 dark:bg-white/60 dark:shadow-gray-300/20'
          }`}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-5">
            <a
              href="#home"
              className="group flex min-w-0 items-center gap-3 rounded-xl pr-2 transition-transform duration-300 hover:-translate-y-0.5"
              onClick={() => {
                setActiveSection('home');
                setIsMenuOpen(false);
              }}
            >
              <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-cyan-300/25 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/30 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700 dark:shadow-cyan-100/40">
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-cyan-300/20" />
                <Terminal className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </span>
              <span className="min-w-0">
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-xl font-black tracking-normal text-transparent dark:from-cyan-700 dark:via-blue-700 dark:to-purple-700 sm:text-2xl">
                  Prodip
                </span>
                <span className="hidden items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100/55 dark:text-gray-600 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  Available
                </span>
              </span>
            </a>

            <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-inner shadow-white/5 dark:border-gray-900/10 dark:bg-gray-900/[0.04] md:flex">
              {menuItems.map(({ href, label, icon: Icon }) => {
                const sectionId = href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={href}
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setActiveSection(sectionId)}
                    className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-4 ${
                      isActive
                        ? 'bg-cyan-400/15 text-cyan-100 shadow-inner shadow-cyan-300/10 ring-1 ring-cyan-300/20 dark:bg-cyan-500/10 dark:text-cyan-700 dark:ring-cyan-700/20'
                        : 'text-gray-300 hover:bg-white/10 hover:text-cyan-200 dark:text-gray-700 dark:hover:bg-gray-900/10 dark:hover:text-cyan-700'
                    }`}
                  >
                    <span
                      className={`absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-cyan-300 to-purple-400 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                    <Icon
                      className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 ${
                        isActive ? 'text-cyan-300 dark:text-cyan-700' : ''
                      }`}
                    />
                    <span className="hidden lg:inline">{label}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <ThemeToggle />
              <a
                href="https://github.com/prodip2416"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-950/20 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700"
              >
                <LucideGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prodip2416/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-950/20 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700"
              >
                <Linkedin size={20} />
              </a>
              <div className="relative">
                <button
                  type="button"
                  aria-label="Open contact options"
                  aria-expanded={isContactMenuOpen}
                  onClick={() => setIsContactMenuOpen((isOpen) => !isOpen)}
                  className={`grid h-10 w-10 place-items-center rounded-xl border bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-950/20 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700 ${
                    isContactMenuOpen
                      ? 'border-cyan-300/40 text-cyan-200 dark:border-cyan-700/30 dark:text-cyan-700'
                      : 'border-white/10 dark:border-gray-900/10'
                  }`}
                >
                  <Mail size={20} />
                </button>
              </div>
              <a
                href="#contact"
                className="group ml-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-4 py-2.5 text-sm font-bold text-gray-950 shadow-lg shadow-cyan-950/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30"
                onClick={handleContactLink}
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-gray-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 dark:border-gray-900/10 dark:bg-gray-900/[0.06] dark:text-gray-800 dark:hover:text-cyan-700 md:hidden"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsContactMenuOpen(false);
              }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isContactMenuOpen && (
          <div className="absolute right-3 top-[76px] hidden w-72 overflow-hidden rounded-2xl border border-cyan-300/20 bg-gray-950/95 p-2 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl dark:border-cyan-700/20 dark:bg-white/95 dark:shadow-gray-300/30 md:block">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 dark:text-cyan-700/70">
                Quick Contact
              </p>
              <p className="mt-1 truncate text-sm text-gray-300 dark:text-gray-700">
                {emailAddress}
              </p>
            </div>
            <div className="mt-1 space-y-1">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                onClick={() => setIsContactMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <Send className="h-4 w-4" />
                  Open Gmail
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                onClick={handleCopyEmail}
              >
                <span className="flex items-center gap-3">
                  {isEmailCopied ? (
                    <Check className="h-4 w-4 text-emerald-400 dark:text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {isEmailCopied ? 'Copied Email' : 'Copy Email'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {isEmailCopied ? 'Ready' : 'Clipboard'}
                </span>
              </button>
              <a
                href="#contact"
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                onClick={handleContactLink}
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  Go to Contact
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="absolute inset-x-3 top-[76px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-gray-950/95 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl dark:border-cyan-700/20 dark:bg-white/95 dark:shadow-gray-300/30 md:hidden">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="flex flex-col gap-2 p-3">
              {menuItems.map(({ href, label, icon: Icon }) => (
                (() => {
                  const sectionId = href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={href}
                      href={href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group flex items-center justify-between rounded-xl border px-3 py-3 transition-all duration-300 ${
                        isActive
                          ? 'border-cyan-300/25 bg-cyan-400/10 text-cyan-100 dark:border-cyan-700/20 dark:bg-cyan-500/10 dark:text-cyan-700'
                          : 'border-transparent text-gray-200 hover:border-cyan-300/20 hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700'
                      }`}
                      onClick={() => {
                        setActiveSection(sectionId);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium">{label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  );
                })()
              ))}
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-3 dark:border-gray-900/10">
                <ThemeToggle />
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/prodip2416"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700"
                  >
                    <LucideGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prodip2416/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700"
                  >
                    <Linkedin size={20} />
                  </a>
                  <button
                    type="button"
                    aria-label="Open contact options"
                    aria-expanded={isContactMenuOpen}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 dark:border-gray-900/10 dark:bg-gray-900/[0.04] dark:text-gray-700 dark:hover:text-cyan-700"
                    onClick={() => setIsContactMenuOpen((isOpen) => !isOpen)}
                  >
                    <Mail size={20} />
                  </button>
                </div>
              </div>

              {isContactMenuOpen && (
                <div className="space-y-1 rounded-xl border border-cyan-300/20 bg-white/[0.03] p-2 dark:border-cyan-700/20 dark:bg-gray-900/[0.03]">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                    onClick={() => {
                      setIsContactMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <Send className="h-4 w-4" />
                    Open Gmail
                  </a>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-200 transition-colors hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                    onClick={handleCopyEmail}
                  >
                    {isEmailCopied ? (
                      <Check className="h-4 w-4 text-emerald-400 dark:text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {isEmailCopied ? 'Copied Email' : 'Copy Email'}
                  </button>
                  <a
                    href="#contact"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-cyan-400/10 hover:text-cyan-200 dark:text-gray-800 dark:hover:text-cyan-700"
                    onClick={handleContactLink}
                  >
                    <Mail className="h-4 w-4" />
                    Go to Contact
                  </a>
                </div>
              )}
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-4 py-3 text-sm font-bold text-gray-950 shadow-lg shadow-cyan-950/25 transition-all duration-300"
                onClick={handleContactLink}
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
