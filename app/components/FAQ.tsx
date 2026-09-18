'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most hotels are up and running within 5 business days. Our dedicated onboarding team handles data migration, user training, and custom configuration to ensure a smooth transition."
    },
    {
      question: "Does it work offline?",
      answer: "Yes! Our mobile app features full offline functionality. Auditors can complete inspections without internet connectivity, and data automatically syncs when back online."
    },
    {
      question: "Can I customize audit templates?",
      answer: "Absolutely. Create unlimited custom audit templates, checklists, and scoring criteria tailored to your brand standards and regulatory requirements."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with leading PMS systems (Opera, Maestro, etc.), accounting software (QuickBooks, Xero), and offer a robust API for custom integrations."
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-level 256-bit encryption, are SOC 2 Type II certified, and maintain full compliance with GDPR and other data protection regulations. Data is backed up daily."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support and comprehensive documentation. Premium plans get priority support, dedicated account managers, and 24/7 emergency assistance."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg.secondary }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Questions? <span className="text-[var(--gold)]">We've Got Answers</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.tertiary }}>
            Everything you need to know about Calibre Audits
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border rounded-xl overflow-hidden
                        hover:border-[var(--gold)] transition-all duration-500
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                backgroundColor: colors.bg.card,
                borderColor: colors.border.default
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <h3 className="text-xl font-semibold group-hover:text-[var(--gold)] transition-colors" style={{ color: colors.text.primary }}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gold)] bg-opacity-20 flex items-center justify-center
                               transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t" style={{ borderColor: colors.border.default }}>
                    <p className="leading-relaxed" style={{ color: colors.text.tertiary }}>
                      {faq.answer}
                    </p>
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
