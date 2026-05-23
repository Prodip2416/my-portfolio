import React, { useEffect, useState } from 'react';
import { ThemeContext } from './theme';
import type { Theme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }

    // Default to dark to match production design
    return 'dark';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    // CSS convention in this project is inverted:
    // 'dark' class triggers light-colored dark: variants
    // So add 'dark' class for light theme, remove for dark theme
    if (theme === 'light') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#0f172a' : '#ffffff'
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === 'dark', toggleTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
