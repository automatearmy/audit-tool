'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { mode, style, colors, setMode, setStyle } = useTheme();

  return (
    <div
      className="fixed top-6 right-6 z-50 flex items-center gap-2 p-2 rounded-full border-2 shadow-lg transition-all duration-300"
      style={{
        backgroundColor: colors.bg.card,
        borderColor: colors.border.accent
      }}
    >
      <button
        onClick={() => setMode('light')}
        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${mode === 'light' ? 'ring-2' : ''}`}
        style={{
          backgroundColor: mode === 'light' ? colors.bg.secondary : 'transparent',
          '--tw-ring-color': colors.border.accent,
        } as React.CSSProperties}
        aria-label="Light mode"
      >
        <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      <button
        onClick={() => setMode('dark')}
        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${mode === 'dark' ? 'ring-2' : ''}`}
        style={{
          backgroundColor: mode === 'dark' ? colors.bg.secondary : 'transparent',
          '--tw-ring-color': colors.border.accent,
        } as React.CSSProperties}
        aria-label="Dark mode"
      >
        <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>

      <button
        onClick={() => setStyle(style === 'patriotic' ? 'default' : 'patriotic')}
        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${style === 'patriotic' ? 'ring-2' : ''}`}
        style={{
          backgroundColor: style === 'patriotic' ? colors.bg.secondary : 'transparent',
          '--tw-ring-color': colors.border.accent,
        } as React.CSSProperties}
        aria-label="Patriotic mode"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#ff605a" d="M12 2l2.4 7.2H22l-6.2 4.4 2.4 7.4L12 16.6l-6.2 4.4 2.4-7.4L2 9.2h7.6z" />
        </svg>
      </button>
    </div>
  );
}


