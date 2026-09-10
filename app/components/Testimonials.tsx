'use client';

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      quote: "Calibre Audits has transformed how we manage quality control across our 15 properties. The time savings alone paid for itself in the first month.",
      author: "Sarah Mitchell",
      role: "Director of Operations",
      company: "Luxury Hotel Group"
    },
    {
      quote: "The mobile app is a game-changer. Our auditors can work seamlessly on-site, and management gets real-time visibility into every inspection.",
      author: "James Rodriguez",
      role: "Quality Assurance Manager",
      company: "Metropolitan Hotels"
    },
    {
      quote: "Finally, an audit platform built by people who understand hotels. The compliance tracking features have saved us from countless headaches.",
      author: "Emily Chen",
      role: "VP of Compliance",
      company: "Coastal Resorts International"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a2e] to-[#242438] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8888aa] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-[#C9A84C] rounded-full">
            <span className="text-[#C9A84C] text-sm font-medium tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by <span className="text-[#C9A84C]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what hotel professionals are saying about Calibre Audits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8 
                        hover:border-[#C9A84C] transition-all duration-500 hover:shadow-2xl
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[#C9A84C] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="text-6xl text-[#C9A84C] opacity-20 mb-4">"</div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <p className="font-semibold text-white mb-1">{testimonial.author}</p>
                  <p className="text-sm text-[#C9A84C] mb-1">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
