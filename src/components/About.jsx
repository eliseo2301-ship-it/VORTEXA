import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Lightbulb, Server, ShieldCheck } from 'lucide-react';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-darkSurface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">{t('about_title')}</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {t('about_desc')}
                    </p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-effect p-8 rounded-theme hover:border-primary/50 transition-all hover:bg-white/[0.03] group"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary group-hover:translate-x-2 transition-transform">{t('about_mission_title')}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t('about_mission_desc')}
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-effect p-8 rounded-theme hover:border-primary/50 transition-all hover:bg-white/[0.03] group"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary group-hover:translate-x-2 transition-transform">{t('about_vision_title')}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t('about_vision_desc')}
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="glass-effect p-8 rounded-theme mt-8 relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-bold mb-8 text-primary text-center">{t('about_pillars_title')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                        <li className="flex flex-col gap-3 group/item">
                            <div className="p-3 bg-primary/10 rounded-full w-fit group-hover/item:bg-primary/20 transition-colors">
                                <Lightbulb className="w-6 h-6 text-primary" />
                            </div>
                            <strong className="text-white text-lg">{t('about_pillar_1_title')}</strong>
                            <span>{t('about_pillar_1_desc')}</span>
                        </li>
                        <li className="flex flex-col gap-3 group/item">
                            <div className="p-3 bg-blue-500/10 rounded-full w-fit group-hover/item:bg-blue-500/20 transition-colors">
                                <Server className="w-6 h-6 text-blue-400" />
                            </div>
                            <strong className="text-white text-lg">{t('about_pillar_2_title')}</strong>
                            <span>{t('about_pillar_2_desc')}</span>
                        </li>
                        <li className="flex flex-col gap-3 group/item">
                            <div className="p-3 bg-purple-500/10 rounded-full w-fit group-hover/item:bg-purple-500/20 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-purple-400" />
                            </div>
                            <strong className="text-white text-lg">{t('about_pillar_3_title')}</strong>
                            <span>{t('about_pillar_3_desc')}</span>
                        </li>
                    </ul>
                    <p className="mt-12 text-center text-xl font-bold text-white tracking-wide">{t('about_slogan')}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
