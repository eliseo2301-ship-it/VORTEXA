import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-darkSurface relative animate-fade">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">{t('about_title')}</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {t('about_desc')}
                    </p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="glass-effect p-8 rounded-theme hover:border-primary/50 transition-all">
                        <h3 className="text-2xl font-bold mb-4 text-primary">{t('about_mission_title')}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t('about_mission_desc')}
                        </p>
                    </div>

                    <div className="glass-effect p-8 rounded-theme hover:border-primary/50 transition-all">
                        <h3 className="text-2xl font-bold mb-4 text-primary">{t('about_vision_title')}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t('about_vision_desc')}
                        </p>
                    </div>
                </div>

                <div className="glass-effect p-8 rounded-theme mt-8">
                    <h3 className="text-2xl font-bold mb-8 text-primary text-center">{t('about_pillars_title')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                        <li className="flex flex-col gap-2">
                            <span className="text-xl">🚀</span>
                            <strong className="text-white">{t('about_pillar_1_title')}</strong>
                            <span>{t('about_pillar_1_desc')}</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <span className="text-xl">🏗️</span>
                            <strong className="text-white">{t('about_pillar_2_title')}</strong>
                            <span>{t('about_pillar_2_desc')}</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <span className="text-xl">🤝</span>
                            <strong className="text-white">{t('about_pillar_3_title')}</strong>
                            <span>{t('about_pillar_3_desc')}</span>
                        </li>
                    </ul>
                    <p className="mt-12 text-center text-xl font-bold gradient-text">{t('about_slogan')}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
