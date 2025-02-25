import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/60 to-gray-950/95" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 slide-up">
              4+ years of experience crafting modern web applications with
              React, Node.js, and cutting-edge technologies
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 slide-up-delay-1">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 text-gray-900 rounded-full hover:bg-cyan-400 transition-colors flex items-center gap-2 font-semibold group"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
