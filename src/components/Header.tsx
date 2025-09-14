import React from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers,
  Terminal,
  Database,
  Briefcase,
  User,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code2 },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: Layers },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed w-full bg-gray-950/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Terminal className="w-8 h-8" />
            <span>Prodip</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group py-2"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/prodip2416"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prodip2416/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:prodip.sarker.cse@gmail.com"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-full hover:bg-cyan-400 transition-colors font-medium flex items-center gap-2"
            >
              <Database className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800">
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
