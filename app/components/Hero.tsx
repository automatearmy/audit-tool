'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    setIsVisible(true);

    // Handle scroll to fade out the scroll indicator
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out over the first 20% of viewport height
      const opacity = Math.max(0, 1 - (scrolled / (windowHeight * 0.2)));
      setScrollIndicatorOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a2e]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(136, 136, 170, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="relative w-24 h-24">
              {/* Diamond outer */}
              <div className="absolute inset-0 border-[3px] border-[#C9A84C] rotate-45" style={{ top: '12%', left: '12%', right: '12%', bottom: '12%' }}></div>
              {/* Diamond inner with opacity */}
              <div className="absolute bg-[#C9A84C] opacity-15 rotate-45" style={{ top: '26%', left: '26%', right: '26%', bottom: '26%' }}></div>
              {/* Chart bars */}
              <div className="absolute left-[35%] top-[38%] w-1.5 h-8 bg-[#C9A84C]"></div>
              <div className="absolute left-[45%] top-[32%] w-1.5 h-10 bg-[#C9A84C]"></div>
              <div className="absolute left-[55%] top-[40%] w-1.5 h-6 bg-[#C9A84C]"></div>
              <div className="absolute left-[65%] top-[44%] w-1.5 h-4 bg-white opacity-60"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-white">CALIBRE</span>
            <br />
            <span className="text-[#C9A84C]">AUDITS</span>
          </h1>
          
          <div className="w-32 h-0.5 bg-[#C9A84C] mx-auto mb-8"></div>

          <p className="text-[#8888aa] text-sm md:text-base tracking-[0.3em] uppercase mb-12">
            Hotel Audit Management
          </p>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Elevate your hotel's performance with precision auditing,
            <br className="hidden md:block" />
            actionable insights, and seamless compliance tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta"
              className="group relative px-8 py-4 bg-[#C9A84C] text-[#1a1a2e] font-semibold rounded-full 
                       hover:bg-[#d4b660] transition-all duration-300 shadow-lg hover:shadow-xl 
                       hover:scale-105 w-full sm:w-auto"
            >
              Get Started Today
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded-full 
                       hover:bg-[#C9A84C] hover:text-[#1a1a2e] transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator with fade out */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="flex flex-col items-center gap-2 text-[#8888aa] text-sm">
            <span className="tracking-wider uppercase text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-[#8888aa] rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-3 bg-[#C9A84C] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
