'use client';

import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      icon: '📱',
      title: 'Mobile-First Auditing',
      description: 'Conduct audits anywhere with our intuitive mobile app. Offline mode ensures you never lose progress.',
      benefits: ['Works offline', 'Photo documentation', 'Voice notes', 'GPS tagging']
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Actionable insights powered by AI. Identify trends, predict issues, and optimize performance.',
      benefits: ['Custom dashboards', 'Trend analysis', 'Predictive alerts', 'Export reports']
    },
    {
      icon: '✅',
      title: 'Compliance Tracking',
      description: 'Stay ahead of regulations with automated compliance monitoring and deadline management.',
      benefits: ['Regulatory updates', 'Auto reminders', 'Certification tracking', 'Audit trails']
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Streamline communication with task assignments, comments, and real-time notifications.',
      benefits: ['Role-based access', 'Task management', 'In-app messaging', 'Activity logs']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.',
      benefits: ['256-bit encryption', 'SSO integration', 'Data backups', 'Compliance certified']
    },
    {
      icon: '🔄',
      title: 'Seamless Integrations',
      description: 'Connect with your existing PMS, accounting software, and other hotel management tools.',
      benefits: ['API access', 'Pre-built integrations', 'Custom webhooks', 'Data sync']
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#242438] to-[#1a1a2e] overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 border border-[#C9A84C] rounded-full">
            <span className="text-[#C9A84C] text-sm font-medium tracking-wider uppercase">Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Need, <span className="text-[#C9A84C]">Nothing You Don't</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful features designed specifically for hotel audit professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-[#242438] border border-gray-800 rounded-2xl p-8 
                        hover:border-[#C9A84C] transition-all duration-500 hover:shadow-2xl
                        hover:transform hover:scale-105
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#8888aa] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
