'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.primary }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(136, 136, 170, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Logo */}
            <div className="mb-8 flex items-center gap-4">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-[3px] border-[var(--gold)] rotate-45" style={{ top: '12%', left: '12%', right: '12%', bottom: '12%' }}></div>
                <div className="absolute bg-[var(--gold)] opacity-15 rotate-45" style={{ top: '26%', left: '26%', right: '26%', bottom: '26%' }}></div>
                <div className="absolute left-[35%] top-[38%] w-1.5 h-8 bg-[var(--gold)]"></div>
                <div className="absolute left-[45%] top-[32%] w-1.5 h-10 bg-[var(--gold)]"></div>
                <div className="absolute left-[55%] top-[40%] w-1.5 h-6 bg-[var(--gold)]"></div>
                <div 
                  className="absolute left-[65%] top-[44%] w-1.5 h-4 opacity-60"
                  style={{ backgroundColor: colors.text.primary }}
                ></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span style={{ color: colors.text.primary }}>CALIBRE</span>
              <br />
              <span className="text-[var(--gold)]">AUDITS</span>
            </h1>
            
            <div className="w-32 h-0.5 bg-[var(--gold)] mb-8"></div>

            <p 
              className="text-sm md:text-base tracking-[0.3em] uppercase mb-8"
              style={{ color: colors.text.muted }}
            >
              Hotel Audit Management
            </p>

            <p 
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              Streamline hotel audits, maintain brand standards, and ensure
              compliance with precision auditing and real-time insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="px-8 py-4 bg-[var(--gold)] text-[var(--dark-text)] font-semibold rounded-full 
                         hover:bg-[var(--gold-hover)] transition-all duration-300 shadow-lg hover:shadow-xl 
                         hover:scale-105 text-center"
              >
                Get Started Today
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-[var(--gold)] text-[var(--gold)] font-semibold rounded-full 
                         hover:bg-[var(--gold)] hover:text-[var(--dark-text)] transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Device Mockups */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative flex justify-center items-center min-h-[420px]">
              {/* Phone Mockup - behind the desktop */}
              <div className="absolute right-0 sm:-right-6 -top-4 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-0">
                <div className="relative bg-black rounded-[2.5rem] p-3 shadow-2xl border-[6px] border-gray-900">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10"></div>
                  <div className="relative bg-white rounded-[2rem] overflow-hidden w-56 h-[480px] p-1">
                    <Image
                      src="/screenshot-2026-09-14_15-30-03.png"
                      alt="Calibre Audits Mobile App"
                      width={224}
                      height={456}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Phone glow */}
                <div className="absolute -inset-8 bg-[var(--purple-gray)] opacity-20 blur-3xl -z-10"></div>
              </div>

              {/* Laptop/Desktop Mockup */}
              <div className="relative -translate-x-32 sm:-translate-x-44 -translate-y-16 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="relative bg-gray-900 rounded-lg shadow-2xl border-4 border-gray-800">
                  {/* Screen */}
                  <div className="relative bg-white rounded-t-lg overflow-hidden w-[560px] h-[350px] p-1">
                    <Image
                      src="/screenshot-2026-09-15_15-03-11.png"
                      alt="Calibre Audits Desktop View"
                      width={560}
                      height={350}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Laptop Base */}
                  <div className="h-4 bg-gray-800 rounded-b-lg relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-b-sm"></div>
                  </div>
                </div>
                {/* Laptop glow */}
                <div className="absolute -inset-8 bg-[var(--gold)] opacity-20 blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Social Proof - Moved here */}
            <div className="mt-24 flex flex-wrap items-center justify-center gap-3">
              <p className="text-lg md:text-xl font-bold text-[var(--gold)] uppercase tracking-widest">Trusted by Leading Brands</p>
              <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-white/5 border border-[var(--gold)]/30 rounded-xl shadow-lg backdrop-blur-sm">
                <Image
                  src="/omni.png"
                  alt="Omni Hotels & Resorts"
                  width={90}
                  height={45}
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
                <span className="text-gray-300 text-sm font-medium">and more...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
