'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { theme, ThemeColors } from '../theme';

type Theme = 'light' | 'dark' | 'patrioticLight' | 'patrioticDark';
type ThemeMode = 'light' | 'dark';
type ThemeStyle = 'default' | 'patriotic';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  style: ThemeStyle;
  colors: ThemeColors;
  setTheme: (theme: Theme) => void;
  setMode: (mode: ThemeMode) => void;
  setStyle: (style: ThemeStyle) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const CLASS_MAP: Record<Theme, string> = {
  light: 'light',
  dark: '',
  patrioticLight: 'patriotic-light',
  patrioticDark: 'patriotic-dark',
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('patrioticLight');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && theme[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', currentTheme);
      const classes = Object.values(CLASS_MAP).filter(Boolean);
      document.documentElement.classList.remove(...classes);
      const cls = CLASS_MAP[currentTheme];
      if (cls) {
        document.documentElement.classList.add(cls);
      }
    }
  }, [currentTheme, mounted]);

  const mode: ThemeMode = currentTheme === 'dark' || currentTheme === 'patrioticDark' ? 'dark' : 'light';
  const style: ThemeStyle = currentTheme === 'patrioticLight' || currentTheme === 'patrioticDark' ? 'patriotic' : 'default';

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  // Switch just the light/dark mode while preserving the current style (default vs patriotic)
  const setMode = (newMode: ThemeMode) => {
    if (style === 'patriotic') {
      setCurrentTheme(newMode === 'dark' ? 'patrioticDark' : 'patrioticLight');
    } else {
      setCurrentTheme(newMode);
    }
  };

  // Switch just the style (default vs patriotic) while preserving the current light/dark mode
  const setStyle = (newStyle: ThemeStyle) => {
    if (newStyle === 'patriotic') {
      setCurrentTheme(mode === 'dark' ? 'patrioticDark' : 'patrioticLight');
    } else {
      setCurrentTheme(mode);
    }
  };

  const colors = theme[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, mode, style, colors, setTheme, setMode, setStyle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}



export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
