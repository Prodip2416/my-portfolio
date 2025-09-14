import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isLoaded: boolean;
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  connectionSpeed?: string;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLoaded: false,
    loadTime: 0,
    renderTime: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const renderTime =
          paint.find((entry) => entry.name === 'first-contentful-paint')
            ?.startTime || 0;

        // Memory usage (if available)
        const memory = (performance as any).memory;
        const memoryUsage = memory
          ? Math.round(memory.usedJSHeapSize / 1024 / 1024)
          : undefined;

        // Connection speed (if available)
        const connection = (navigator as any).connection;
        const connectionSpeed = connection
          ? connection.effectiveType
          : undefined;

        setMetrics({
          isLoaded: true,
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage,
          connectionSpeed,
        });
      }
    };

    // Measure after component mounts
    const timer = setTimeout(measurePerformance, 100);

    return () => clearTimeout(timer);
  }, []);

  return metrics;
};

// Hook for tracking component render performance
export const useRenderPerformance = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // Track render time if it's significant
      if (renderTime > 16) {
        // More than one frame (16ms)
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
};

// Hook for tracking user interactions
export const useInteractionTracking = () => {
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;

      // Track meaningful interactions
      if (
        tagName === 'button' ||
        tagName === 'a' ||
        className.includes('clickable')
      ) {
        console.log('User interaction:', {
          element: tagName,
          className,
          id,
          timestamp: Date.now(),
        });
      }
    };

    document.addEventListener('click', trackInteraction);

    return () => {
      document.removeEventListener('click', trackInteraction);
    };
  }, []);
};
