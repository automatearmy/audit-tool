'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ProductDemo() {
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, var(--gold) 12%, transparent 12.5%, transparent 87%, var(--gold) 87.5%, var(--gold)),
                           linear-gradient(150deg, var(--gold) 12%, transparent 12.5%, transparent 87%, var(--gold) 87.5%, var(--gold))`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Experience the <span className="text-[var(--gold)]">Platform</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.tertiary }}>
            Watch how Calibre Audits transforms your audit workflow from start to finish
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Placeholder for demo video/screenshots */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold)] to-[var(--purple-gray)] rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur"></div>
            
            <div
              className="relative border-2 rounded-2xl p-8 md:p-12 transition-colors duration-300"
              style={{ backgroundColor: colors.bg.secondary, borderColor: colors.border.default }}
            >
              <div 
                className="aspect-video rounded-xl flex items-center justify-center border-2 transition-colors duration-300"
                style={{
                  backgroundColor: colors.bg.card,
                  borderColor: colors.border.default
                }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--gold)] bg-opacity-20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[var(--gold)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold mb-2" style={{ color: colors.text.primary }}>Product Demo Video</p>
                  <p style={{ color: colors.text.tertiary }}>Coming soon - Add your demo content here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '01', title: 'Setup', desc: 'Quick 5-minute onboarding' },
              { number: '02', title: 'Audit', desc: 'Mobile-first inspection flow' },
              { number: '03', title: 'Report', desc: 'Automated insights & sharing' }
            ].map((step, i) => (
              <div
                key={i}
                className={`text-center p-6 border rounded-xl hover:border-[var(--gold)] transition-all duration-300
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${600 + i * 100}ms`,
                  backgroundColor: colors.bg.card,
                  borderColor: colors.border.default
                }}
              >
                <div className="text-4xl font-bold text-[var(--gold)] mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>{step.title}</h3>
                <p className="text-sm" style={{ color: colors.text.tertiary }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
