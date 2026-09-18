'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { colors } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.location.href = `mailto:luke@calibreaudits.com?subject=Demo Request&body=Please reach out to me at ${email} to schedule a demo.`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      id="cta"
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.secondary }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--gold)] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--purple-gray)] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold)] to-[var(--purple-gray)] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
            
            <div 
              className="relative border-2 border-[var(--gold)] rounded-3xl p-12 md:p-16 transition-colors duration-300"
              style={{ backgroundColor: colors.bg.primary }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-left" style={{ color: colors.text.primary }}>
                Are You Ready to Know
                <br />
                If You're <span className="text-[var(--gold)]">Meeting Your Standards?</span>
              </h2>

              <p className="text-xl mb-10 max-w-2xl text-left" style={{ color: colors.text.tertiary }}>
                Stop guessing. Start proving. Drop your email below and we'll reach out to schedule 
                a private demo showing how leading hotels maintain accountability to their brand standards.
              </p>

              <div className="max-w-lg mb-10">
                {submitted ? (
                  <div
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--gold)]"
                    style={{ backgroundColor: colors.bg.card }}
                  >
                    <svg className="w-6 h-6 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold" style={{ color: colors.text.primary }}>
                      Thanks! We'll reach out shortly to schedule your demo.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourhotel.com"
                      className="flex-1 px-5 py-3 rounded-full border-2 outline-none focus:border-[var(--gold)] transition-colors duration-300"
                      style={{
                        backgroundColor: colors.bg.card,
                        borderColor: colors.border.default,
                        color: colors.text.primary
                      }}
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[var(--gold)] text-[var(--dark-text)] font-bold rounded-full 
                               hover:bg-[var(--gold-hover)] transition-all duration-300 
                               hover:scale-105 w-full sm:w-auto flex items-center justify-center"
                    >
                      Get a Demo
                    </button>
                  </form>

                )}
                {!submitted && (
                  <p className="text-sm mt-3 text-left" style={{ color: colors.text.tertiary }}>
                    Just your email — we'll take it from there and reach out to set up your demo.
                  </p>
                )}
              </div>


              <div className="flex flex-wrap items-center gap-8 text-sm" style={{ color: colors.text.tertiary }}>

                {['Private demo link provided', 'See real audit workflows', 'Enterprise pricing: $20K-$40K/year'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 mt-20">
        <div className="border-t pt-8 text-center" style={{ borderColor: colors.border.default }}>
          <p className="text-sm" style={{ color: colors.text.tertiary }}>© 2026 Calibre Audits. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
