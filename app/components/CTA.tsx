'use client';

import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#242438] to-[#1a1a2e] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A84C] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8888aa] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A84C] to-[#8888aa] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-[#1a1a2e] border-2 border-[#C9A84C] rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="text-[#C9A84C]">Audit Process?</span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join hundreds of hotels already using Calibre Audits to streamline operations, 
                ensure compliance, and elevate quality standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href="mailto:sales@calibreaudits.com"
                  className="group/btn px-8 py-5 bg-[#C9A84C] text-[#1a1a2e] font-bold text-lg rounded-full 
                           hover:bg-[#d4b660] transition-all duration-300 shadow-2xl hover:shadow-[#C9A84C]/50 
                           hover:scale-110 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Reach Out to Sales
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="mailto:demo@calibreaudits.com"
                  className="px-8 py-5 border-2 border-[#C9A84C] text-[#C9A84C] font-bold text-lg rounded-full 
                           hover:bg-[#C9A84C] hover:text-[#1a1a2e] transition-all duration-300 w-full sm:w-auto"
                >
                  Request a Demo
                </a>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                {['No credit card required', 'Setup in 5 days', 'Cancel anytime'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2026 Calibre Audits. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
