'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "Calibre Audits revolutionized our entire audit process. What used to take hours now takes minutes. The streamlined workflow and automation have made our inspections faster and more thorough, which directly translates to higher profits and better guest experiences across all our properties.",
      author: "Danny",
      role: "Owner",
      company: "Inspired Hospitality",
      image: "/danny.jpeg",
      featured: true
    },
    {
      quote: "We work with a national hotel chain. Compiling audits now takes minutes instead of days. The platform is so much easier than manual methods that we're already recommending it to other properties we audit.",
      author: "Professional Auditor",
      role: "Third-Party Auditor",
      company: "Hotel Compliance Services",
      image: null,
      featured: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.primary }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--purple-gray)] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Trusted by <span className="text-[var(--gold)]">Industry Leaders</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.tertiary }}>
            See what hotel professionals are saying about Calibre Audits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative flex flex-col border rounded-2xl p-8 
                        hover:border-[var(--gold)] transition-all duration-500 hover:shadow-2xl
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundColor: colors.bg.card,
                borderColor: colors.border.default
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[var(--gold)] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Quote icon */}
                <div className="text-6xl text-[var(--gold)] opacity-20 mb-4">"</div>
                
                <p className="text-lg leading-relaxed mb-6 flex-grow" style={{ color: colors.text.secondary }}>
                  {testimonial.quote}
                </p>

                <div className="border-t pt-4 mt-auto" style={{ borderColor: colors.border.default }}>
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className={`w-16 h-16 object-contain ${
                          testimonial.author === 'Omni Hotels & Resorts' 
                            ? 'bg-white rounded-lg p-2' 
                            : 'rounded-full object-cover border-2 border-[var(--gold)]'
                        }`}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center">
                        <span className="text-2xl font-bold text-[var(--dark-text)]">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold mb-1" style={{ color: colors.text.primary }}>{testimonial.author}</p>
                      <p className="text-sm text-[var(--gold)] mb-1">{testimonial.role}</p>
                      <p className="text-sm" style={{ color: colors.text.tertiary }}>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
