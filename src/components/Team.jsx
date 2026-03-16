import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Team = () => {
    const { t } = useLanguage();

    const members = [
        { name: "Eliseo Torres Martiñon", role: t('team_role_1'), img: "👨‍💼" },
        { name: "Carlos Gonzalo Gonzalez", role: t('team_role_2'), img: "👨‍💻" }
    ];

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
                
                <div className="flex flex-wrap justify-center gap-10">
                    {members.map((m, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="glass-effect p-10 rounded-theme text-center w-full max-w-sm hover:border-primary/50 transition-all hover:bg-white/[0.03] group"
                        >
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{m.img}</div>
                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{m.name}</h3>
                            <p className="text-primary font-medium">{m.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
