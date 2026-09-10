'use client';

import { useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import ProductDemo from './components/ProductDemo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
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

