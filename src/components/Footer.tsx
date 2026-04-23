import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-r from-black/70 to-gray-900 text-gray-400 py-8 border-t border-gray-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm sm:text-base">
            © {currentYear} Prodip Sarker. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
