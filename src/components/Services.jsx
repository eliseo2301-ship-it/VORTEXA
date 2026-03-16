import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Smartphone, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service_1_title'),
            description: t('service_1_desc'),
            icon: <Smartphone className="w-8 h-8 text-primary" />
        },
        {
            title: t('service_2_title'),
            description: t('service_2_desc'),
            icon: <Globe className="w-8 h-8 text-primary" />
        },
        {
            title: t('service_3_title'),
            description: t('service_3_desc'),
            icon: <TrendingUp className="w-8 h-8 text-primary" />
        }
    ];

    return (
        <section id="services" className="py-24 bg-darkBg relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services_title')}</h2>
                    <p className="text-gray-400 mb-6">{t('services_subtitle')}</p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-darkSurface p-8 rounded-theme hover:bg-white/[0.03] hover:shadow-[0_10px_30px_rgba(17,82,212,0.15)] hover:border-primary/30 border border-transparent transition-all transform hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-theme flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {s.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
