'use client';

import { useEffect, useRef, useState } from 'react';

export default function Solution() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#242438] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#C9A84C] rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#C9A84C] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#8888aa] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#8888aa] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A84C] bg-opacity-10 border border-[#C9A84C] rounded-full">
              <span className="text-[#C9A84C] text-sm font-medium tracking-wider uppercase">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet <span className="text-[#C9A84C]">Calibre Audits</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The all-in-one platform that transforms hotel auditing into a streamlined,
              data-driven process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                From Chaos to <span className="text-[#C9A84C]">Clarity</span> in Minutes
              </h3>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Calibre Audits digitizes and automates your entire audit workflow, 
                giving you complete visibility and control over every property.
              </p>
              <ul className="space-y-4">
                {['Centralized audit management', 'Real-time compliance tracking', 
                  'Automated reporting & analytics', 'Mobile-first design for on-site audits'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#C9A84C] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-[#C9A84C] rounded-3xl opacity-30"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#C9A84C] to-[#8888aa] rounded-3xl opacity-10"></div>
                
                <div className="relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8">
                  <div className="space-y-6">
                    {[
                      { label: 'Audit Completion Rate', value: '97%', icon: '📈' },
                      { label: 'Time Saved per Audit', value: '65%', icon: '⚡' },
                      { label: 'Client Satisfaction', value: '4.9/5', icon: '⭐' }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-[#242438] rounded-xl border border-gray-700">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                          <div className="text-3xl font-bold text-[#C9A84C]">{stat.value}</div>
                        </div>
                        <div className="text-4xl">{stat.icon}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
