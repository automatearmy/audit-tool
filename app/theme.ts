export const theme = {
  dark: {
    // Backgrounds
    bg: {
      primary: '#1a1a2e',
      secondary: '#242438',
      tertiary: '#16162a',
      card: '#1a1a2e',
      cardHover: '#242438',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      tertiary: '#a0a0a0',
      muted: '#8888aa',
      accent: '#C9A84C',
    },
    // Borders
    border: {
      default: '#374151',
      light: '#4b5563',
      accent: '#C9A84C',
    },
  },
  light: {
    // Backgrounds
    bg: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
      card: '#ffffff',
      cardHover: '#f9fafb',
    },
    // Text colors
    text: {
      primary: '#111827',
      secondary: '#374151',
      tertiary: '#6b7280',
      muted: '#9ca3af',
      accent: '#C9A84C',
    },
    // Borders
    border: {
      default: '#e5e7eb',
      light: '#f3f4f6',
      accent: '#C9A84C',
    },
  },
  patrioticLight: {
    // Backgrounds
    bg: {
      primary: '#ffffff',
      secondary: '#f0f5ff',
      tertiary: '#eaf0ff',
      card: '#ffffff',
      cardHover: '#f0f5ff',
    },
    // Text colors
    text: {
      primary: '#1a1a2e',
      secondary: '#334155',
      tertiary: '#64748b',
      muted: '#85aef6',
      accent: '#ff605a',
    },
    // Borders
    border: {
      default: '#dbe6fb',
      light: '#eaf0ff',
      accent: '#ff605a',
    },
  },
  patrioticDark: {
    // Backgrounds
    bg: {
      primary: '#85aef6',
      secondary: '#6b98e8',
      tertiary: '#537fd6',
      card: '#7aa5f2',
      cardHover: '#6b98e8',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#f0f5ff',
      tertiary: '#e2ecff',
      muted: '#ffffff',
      accent: '#ff605a',
    },
    // Borders
    border: {
      default: '#537fd6',
      light: '#6b98e8',
      accent: '#ff605a',
    },
  },
};



export type ThemeColors = typeof theme.dark;

