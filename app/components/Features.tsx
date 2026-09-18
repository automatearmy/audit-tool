'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Features() {
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
      { threshold: 0.1 }
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

  const features = [
    {
      icon: '⚡',
      title: 'Audits in Minutes, Not Hours',
      description: 'Legacy tools force rigid, all-or-nothing checklists that take hours to complete. Calibre Audits lets you pick up and put down audits on your phone, cutting completion time from hours to minutes.',
      outcome: 'Outcome: Auditors reclaim hours every week to spend on guest experience instead of paperwork'
    },
    {
      icon: '🎯',
      title: 'Audit Exactly What You Need',
      description: 'Competitor platforms require a full-property sweep every time. With dynamic segment auditing, you can check just the housekeeping floor, the front desk, or a single room on your own schedule.',
      outcome: 'Outcome: No more forced full-property audits when you only need a quick spot-check'
    },
    {
      icon: '📈',
      title: 'Provable Accountability Over Time',
      description: 'Spreadsheets and paper checklists give you a snapshot, not a story. Calibre Audits tracks trends across every property and shift, so you can walk into any exec meeting with data-backed proof.',
      outcome: 'Outcome: Replace guesswork with hard evidence that you\'re meeting brand standards'
    },
    {
      icon: '🤖',
      title: 'Built for What\'s Next',
      description: 'While competitors are stuck with static forms, Calibre Audits is built on a modern platform with AI dictation and intelligent recommendations on the roadmap.',
      outcome: 'Outcome: You\'re investing in a platform that gets smarter, not one that gets stale'
    }
  ];



  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.primary }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Audit Your Standards. <span className="text-[var(--gold)]">Prove You're Meeting Them.</span>
          </h2>
          <p className="text-xl max-w-3xl" style={{ color: colors.text.tertiary }}>
            Here's how Calibre Audits outperforms manual spreadsheets and legacy audit tools.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative flex items-start gap-6 p-6 rounded-lg border backdrop-blur-sm hover:border-[var(--gold)]
                        transition-all duration-500 hover:translate-x-2
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                backgroundColor: colors.bg.card + '80',
                borderColor: colors.border.default
              }}
            >
              {/* Icon */}
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--gold)] transition-colors"
                  style={{ color: colors.text.primary }}
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: colors.text.tertiary }}
                >
                  {feature.description}
                </p>
                <p className="text-sm text-[var(--gold)] italic">
                  ✓ {feature.outcome}
                </p>
              </div>

              {/* Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

