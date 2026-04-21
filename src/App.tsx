import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { initAnalytics, trackPortfolioEvent } from './utils/analytics';
function App() {

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
          <Experience />
          <Projects />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />

      </div>
    </ThemeProvider>
  );
}

export default App;
