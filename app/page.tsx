'use client';

import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import ProductDemo from './components/ProductDemo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function HomeContent() {
  const { colors } = useTheme();

  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: colors.bg.primary }}
    >
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ProductDemo />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

