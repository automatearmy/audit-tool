'use client';

import { useEffect, useRef, useState } from 'react';

export default function Problem() {
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

  const problems = [
    {
      icon: '📋',
      title: 'Manual Audit Chaos',
      description: 'Scattered paperwork, lost reports, and inconsistent audit standards across properties.'
    },
    {
      icon: '⏱️',
      title: 'Time-Consuming Processes',
      description: 'Hours spent compiling data, chasing follow-ups, and creating reports manually.'
    },
    {
      icon: '🔍',
      title: 'Lack of Visibility',
      description: 'No real-time insights into audit progress, compliance status, or performance trends.'
    },
    {
      icon: '❌',
      title: 'Compliance Risks',
      description: 'Missed deadlines, incomplete audits, and potential regulatory penalties.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a2e] to-[#242438] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A84C] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8888aa] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-[#C9A84C] rounded-full">
            <span className="text-[#C9A84C] text-sm font-medium tracking-wider uppercase">The Challenge</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hotel Audits Are <span className="text-[#C9A84C]">Broken</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional audit methods are costing you time, money, and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8 
                        hover:border-[#C9A84C] transition-all duration-500 hover:shadow-xl
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#C9A84C] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C9A84C] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-br-2xl"></div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-[#C9A84C] font-semibold">
            There has to be a better way...
          </p>
        </div>
      </div>
    </section>
  );
}
