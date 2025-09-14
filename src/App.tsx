import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SkillsProficiency from './components/SkillsProficiency';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { initAnalytics, trackPortfolioEvent } from './utils/analytics';
import { usePerformance } from './hooks/usePerformance';

function App() {
  const performance = usePerformance();

  useEffect(() => {
    // Initialize analytics
    const cleanup = initAnalytics();

    // Track initial page load
    trackPortfolioEvent.sectionView('Portfolio Home');

    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-950 dark:bg-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <SkillsProficiency />
          <Experience />
          <Projects />
          <Achievements />
          <GitHubStats />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />

        {/* Performance Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && performance.isLoaded && (
          <div className="fixed bottom-4 right-20 bg-gray-800 text-white p-2 rounded text-xs opacity-50 z-40">
            Load: {performance.loadTime}ms | Render: {performance.renderTime}ms
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
