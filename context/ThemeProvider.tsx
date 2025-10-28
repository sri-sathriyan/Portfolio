
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Determines the initial theme based on localStorage or system preference.
// This function runs only once to prevent re-computation.
const getInitialTheme = (): Theme => {
  // Check for theme in localStorage.
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (storedPrefs === 'light' || storedPrefs === 'dark') {
      return storedPrefs;
    }

    // Check for system preference.
    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
      return 'light';
    }
  }

  // Default to dark theme.
  return 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize state with the determined theme to prevent flickering.
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Effect to apply the theme class to the <html> element and persist it.
  useEffect(() => {
    const root = window.document.documentElement;
    
    // This logic is specifically for Tailwind's `darkMode: 'class'` strategy.
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Persist the theme choice in localStorage.
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Failed to save theme to localStorage.', e);
    }
  }, [theme]);

  // Memoized function to toggle the theme.
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // Memoize the context value to prevent unnecessary re-renders of consumers.
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
