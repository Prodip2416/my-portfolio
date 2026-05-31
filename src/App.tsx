import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { initAnalytics, trackPortfolioEvent } from './utils/analytics';
function App() {
  const isKnownRoute = window.location.pathname === '/';

  useEffect(() => {
    document.title = isKnownRoute
      ? 'Prodip Sarker | Full Stack Developer - React, Next.js, NestJS'
      : 'Page Not Found | Prodip Sarker';

    // Initialize analytics
    const cleanup = initAnalytics();

    // Track initial page load
    trackPortfolioEvent.sectionView(
      isKnownRoute ? 'Portfolio Home' : '404 Not Found'
    );

    // Cleanup on unmount
    return cleanup;
  }, [isKnownRoute]);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
          {isKnownRoute ? (
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <GitHubStats />
                <Contact />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          ) : (
            <NotFound />
          )}

        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
