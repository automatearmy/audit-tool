'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

export default function Solution() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { colors } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.secondary }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[var(--gold)] rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-[var(--gold)] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[var(--purple-gray)] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[var(--purple-gray)] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
              Meet <span className="text-[var(--gold)]">Calibre Audits</span>
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: colors.text.tertiary }}>
              The all-in-one platform that transforms hotel auditing into a streamlined,
              data-driven process
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-center mb-20">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: colors.text.primary }}>
                From Chaos to <span className="text-[var(--gold)]">Clarity</span> in Minutes
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.text.tertiary }}>
                Calibre Audits digitizes and automates your entire audit workflow, 
                giving you complete visibility and control over every property.
              </p>
              <ul className="space-y-4">
                {['Centralized audit management', 'Real-time compliance tracking', 
                  'Automated reporting & analytics', 'Mobile-first design for on-site audits'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[var(--gold)] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: colors.text.secondary }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`md:-mr-24 lg:-mr-40 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Image
                src="/solution-comparison.png"
                alt="Score comparison showing performance improvements across audit metrics"
                width={2154}
                height={1548}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
