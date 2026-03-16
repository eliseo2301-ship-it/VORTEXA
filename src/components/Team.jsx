import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
    const { t } = useLanguage();

    const members = [
        { name: "Eliseo Torres Martiñon", role: t('team_role_1'), img: "👨‍💼" },
        { name: "Carlos Gonzalo Gonzalez", role: t('team_role_2'), img: "👨‍💻" }
    ];

    return (
        <section id="team" className="py-24 bg-darkBg relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-fade">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">{t('team_title')}</h2>
                    <p className="text-gray-400 mb-6">{t('team_subtitle')}</p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-10">
                    {members.map((m, i) => (
                        <div key={i} className="glass-effect p-10 rounded-theme text-center w-full max-w-sm hover:border-primary/50 transition-all">
                            <div className="text-6xl mb-6">{m.img}</div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{m.name}</h3>
                            <p className="text-primary font-medium">{m.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
