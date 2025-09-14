import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { trackPortfolioEvent } from '../utils/analytics';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 rounded-xl p-6 transition-all"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.a
            href="mailto:prodip.sarker.cse@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-cyan-500/50 transition-all"
            onClick={() => trackPortfolioEvent.emailClick()}
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
              Email
            </h3>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              prodip.sarker.cse@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/prodip2416/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-cyan-500/50 transition-all"
            onClick={() => trackPortfolioEvent.linkedinClick()}
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              Connect professionally
            </p>
          </motion.a>

          <motion.a
            href="https://github.com/prodip2416"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-cyan-500/50 transition-all"
            onClick={() => trackPortfolioEvent.githubClick()}
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
              GitHub
            </h3>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              Check out my code
            </p>
          </motion.a>

          <motion.a
            href="tel:+8801744610807"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-cyan-500/50 transition-all"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
              WhatsApp
            </h3>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              +880 1744 610 807
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Currently based in{' '}
            <span className="text-purple-400">Dhaka, Bangladesh</span>
            <br />
            Open to remote opportunities worldwide
          </p>
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-sm sm:text-base">
              Available for relocation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
