import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-black/70 to-gray-900 text-gray-400 py-8 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Bottom Section: Copyright and Back-to-Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base">
            © {currentYear} Prodip Sarker. All rights reserved.
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm sm:text-base hover:text-purple-400 transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
