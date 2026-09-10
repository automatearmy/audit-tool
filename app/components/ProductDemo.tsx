'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProductDemo() {
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
      className="relative py-20 md:py-32 bg-[#1a1a2e] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #C9A84C 12%, transparent 12.5%, transparent 87%, #C9A84C 87.5%, #C9A84C),
                           linear-gradient(150deg, #C9A84C 12%, transparent 12.5%, transparent 87%, #C9A84C 87.5%, #C9A84C)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-[#C9A84C] rounded-full">
            <span className="text-[#C9A84C] text-sm font-medium tracking-wider uppercase">See it in Action</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the <span className="text-[#C9A84C]">Platform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how Calibre Audits transforms your audit workflow from start to finish
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Placeholder for demo video/screenshots */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A84C] to-[#8888aa] rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur"></div>
            
            <div className="relative bg-[#242438] border-2 border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="aspect-video bg-[#1a1a2e] rounded-xl flex items-center justify-center border-2 border-gray-700">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C9A84C] bg-opacity-20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-white mb-2">Product Demo Video</p>
                  <p className="text-gray-400">Coming soon - Add your demo content here</p>
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
                className={`text-center p-6 bg-[#242438] border border-gray-800 rounded-xl hover:border-[#C9A84C] transition-all duration-300
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="text-4xl font-bold text-[#C9A84C] mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
