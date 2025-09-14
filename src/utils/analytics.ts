// Analytics and Performance Monitoring Utilities

// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: 'Prodip Sarker Portfolio',
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio events
export const trackPortfolioEvent = {
  // Project interactions
  projectView: (projectName: string) => {
    trackEvent('project_view', 'Projects', projectName);
  },

  projectDemo: (projectName: string) => {
    trackEvent('project_demo', 'Projects', projectName);
  },

  projectCode: (projectName: string) => {
    trackEvent('project_code', 'Projects', projectName);
  },

  // Contact interactions
  emailClick: () => {
    trackEvent('email_click', 'Contact', 'Email');
  },

  linkedinClick: () => {
    trackEvent('linkedin_click', 'Contact', 'LinkedIn');
  },

  githubClick: () => {
    trackEvent('github_click', 'Contact', 'GitHub');
  },

  resumeDownload: () => {
    trackEvent('resume_download', 'Contact', 'Resume');
  },

  // Theme interactions
  themeToggle: (theme: string) => {
    trackEvent('theme_toggle', 'UI', theme);
  },

  // Section views
  sectionView: (sectionName: string) => {
    trackEvent('section_view', 'Navigation', sectionName);
  },

  // Certification views
  certificationView: (certName: string) => {
    trackEvent('certification_view', 'Certifications', certName);
  },

  // Skills interactions
  skillHover: (skillName: string) => {
    trackEvent('skill_hover', 'Skills', skillName);
  },
};

// Performance Monitoring
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;

      const metrics = {
        // Core Web Vitals
        LCP: 0, // Largest Contentful Paint
        FID: 0, // First Input Delay
        CLS: 0, // Cumulative Layout Shift
        FCP: 0, // First Contentful Paint
        TTFB: 0, // Time to First Byte

        // Additional metrics
        domContentLoaded:
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
      };

      // Track performance metrics
      trackEvent(
        'performance_metrics',
        'Performance',
        'Page Load',
        Math.round(metrics.totalLoadTime)
      );

      // Log performance data (for debugging)
      console.log('Performance Metrics:', metrics);
    });
  }
};

// Web Vitals Measurement
export const measureWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Import web-vitals library dynamically with error handling
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          trackEvent(
            'web_vital',
            'Performance',
            'CLS',
            Math.round(metric.value * 1000)
          );
        });

        getFID((metric) => {
          trackEvent(
            'web_vital',
            'Performance',
            'FID',
            Math.round(metric.value)
          );
        });

        getFCP((metric) => {
          trackEvent(
            'web_vital',
            'Performance',
            'FCP',
            Math.round(metric.value)
          );
        });

        getLCP((metric) => {
          trackEvent(
            'web_vital',
            'Performance',
            'LCP',
            Math.round(metric.value)
          );
        });

        getTTFB((metric) => {
          trackEvent(
            'web_vital',
            'Performance',
            'TTFB',
            Math.round(metric.value)
          );
        });
      })
      .catch((error) => {
        console.warn('Web Vitals measurement failed:', error);
        // Fallback to basic performance measurement
        measurePerformance();
      });
  }
};

// Error Tracking
export const trackError = (error: Error, context?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: {
        context: context || 'Unknown',
        stack: error.stack,
      },
    });
  }

  // Log to console for debugging
  console.error('Error tracked:', error, context);
};

// User Engagement Tracking
export const trackEngagement = () => {
  let startTime = Date.now();
  let isActive = true;

  // Track time on page
  const trackTimeOnPage = () => {
    if (isActive) {
      const timeSpent = Date.now() - startTime;
      trackEvent(
        'time_on_page',
        'Engagement',
        'Seconds',
        Math.round(timeSpent / 1000)
      );
    }
  };

  // Track when user becomes inactive
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isActive = false;
      trackTimeOnPage();
    } else {
      isActive = true;
      startTime = Date.now();
    }
  };

  // Track when user leaves the page
  const handleBeforeUnload = () => {
    trackTimeOnPage();
  };

  // Add event listeners
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', handleBeforeUnload);

  // Track every 30 seconds while active
  const interval = setInterval(() => {
    if (isActive) {
      trackTimeOnPage();
      startTime = Date.now(); // Reset timer
    }
  }, 30000);

  // Cleanup function
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handleBeforeUnload);
    clearInterval(interval);
  };
};

// Initialize all analytics
export const initAnalytics = () => {
  initGA();
  measurePerformance();
  measureWebVitals();

  // Track initial page view
  trackPageView(window.location.pathname, document.title);

  // Start engagement tracking
  return trackEngagement();
};

// Utility to check if analytics is available
export const isAnalyticsAvailable = () => {
  return typeof window !== 'undefined' && window.gtag;
};
