'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Problem() {
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

  const problems = [
    {
      icon: '🎯',
      title: 'You Have Standards. No Way to Measure Them.',
      description: 'Your brand has clear standards, but how do you prove you\'re meeting them across every property, every shift, every day?',
      featured: true
    },
    {
      icon: '😰',
      title: 'No Accountability',
      description: 'Without consistent auditing of your standards, there\'s no accountability. You\'re flying blind on what\'s actually happening.'
    },
    {
      icon: '⏱️',
      title: 'Time-Consuming Manual Work',
      description: 'Hours spent on paperwork and spreadsheets instead of improving guest experiences and upholding standards.'
    },
    {
      icon: '📉',
      title: 'Standards Slip Through the Cracks',
      description: 'Incomplete audits, missed follow-ups, and inconsistent enforcement mean your brand standards aren\'t being maintained.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{
        background: `linear-gradient(to bottom, ${colors.bg.primary}, ${colors.bg.secondary})`
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--gold)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--purple-gray)] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: colors.text.primary }}
          >
            You Have Brand Standards.<br />
            <span className="text-[var(--gold)]">Can You Prove You're Meeting Them?</span>
          </h2>
          <p 
            className="text-xl max-w-3xl"
            style={{ color: colors.text.tertiary }}
          >
            You're a hotel manager with a reputation to protect. But without a reliable way to audit your standards, you have no proof you're upholding them.
          </p>
        </div>

        {/* Featured Problem - Large emphasis */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div
            className="relative border-l-4 border-[var(--gold)] rounded-lg p-8 md:p-12 max-w-4xl transition-colors duration-300"
            style={{
              background: `linear-gradient(to bottom right, ${colors.bg.primary}, ${colors.bg.secondary})`
            }}
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl md:text-7xl flex-shrink-0">{problems[0].icon}</div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
                  {problems[0].title}
                </h3>
                <p className="text-xl leading-relaxed" style={{ color: colors.text.secondary }}>
                  {problems[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Problems - Clean list */}
        <div className="max-w-4xl space-y-6">
          {problems.slice(1).map((problem, index) => (
            <div
              key={index}
              className={`group relative flex items-start gap-6 p-6 rounded-lg border backdrop-blur-sm hover:border-[var(--gold)]
                        transition-all duration-500 hover:translate-x-2
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${(index + 3) * 150}ms`,
                backgroundColor: colors.bg.card + '80',
                borderColor: colors.border.default
              }}
            >
              {/* Icon */}
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--gold)] transition-colors"
                  style={{ color: colors.text.primary }}
                >
                  {problem.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: colors.text.tertiary }}
                >
                  {problem.description}
                </p>
              </div>

              {/* Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
            </div>
          ))}
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-[var(--gold)] font-semibold">
            Your brand deserves better than guesswork.
          </p>
        </div>
      </div>
    </section>
  );
}
