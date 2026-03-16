import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service_1_title'),
            description: t('service_1_desc'),
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
            )
        },
        {
            title: t('service_2_title'),
            description: t('service_2_desc'),
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
            )
        },
        {
            title: t('service_3_title'),
            description: t('service_3_desc'),
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 bg-darkBg relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-fade">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services_title')}</h2>
                    <p className="text-gray-400 mb-6">{t('services_subtitle')}</p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="service-card animate-fade" style={{ animationDelay: `${i * 0.2}s` }}>
                            <div className="w-16 h-16 bg-primary/10 rounded-theme flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
