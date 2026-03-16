import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Team = () => {
    const { t } = useLanguage();

    return (
        <section id="team" className="py-24 bg-darkBg relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">{t('team_title')}</h2>
                    <p className="text-gray-400 mb-6">{t('team_subtitle')}</p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </motion.div>
                
                <div className="flex justify-center mt-12 w-full px-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-3xl rounded-[2rem] overflow-hidden"
                    >
                        <img 
                            src="/assets/team_banner.png" 
                            alt="Equipo Directivo VORTEXA - Eliseo y Carlos" 
                            className="w-full h-auto object-cover rounded-[2rem] shadow-[0_0_50px_rgba(17,82,212,0.3)] hover:shadow-[0_0_80px_rgba(17,82,212,0.5)] transition-all duration-700 hover:scale-[1.02] border border-white/5"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
