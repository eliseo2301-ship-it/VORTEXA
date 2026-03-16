import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { User, Code2, Linkedin, Mail } from 'lucide-react';

const Team = () => {
    const { t } = useLanguage();

    const members = [
        { 
            name: "Eliseo Torres Martiñon", 
            role: t('team_role_1'), 
            icon: <User className="w-12 h-12 text-white" />,
            color: "from-blue-500 to-indigo-600"
        },
        { 
            name: "Carlos Gonzalo Gonzalez", 
            role: t('team_role_2'), 
            icon: <Code2 className="w-12 h-12 text-white" />,
            color: "from-emerald-400 to-cyan-500"
        }
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
                            className="glass-effect p-10 rounded-theme text-center w-full max-w-sm hover:border-primary/50 transition-all hover:bg-white/[0.03] group relative overflow-hidden flex flex-col items-center"
                        >
                            <div className={`w-28 h-28 mb-6 rounded-full bg-gradient-to-br ${m.color} p-1 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                <div className="w-full h-full bg-darkBg rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                                    {m.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{m.name}</h3>
                            <p className="text-primary font-medium mb-6 relative z-10">{m.role}</p>

                            {/* Interacciones / Redes Sociales */}
                            <div className="flex justify-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 text-gray-400 hover:text-white transition-all hover:scale-110 shadow-lg">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary text-gray-400 hover:text-white transition-all hover:scale-110 shadow-lg">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Glow de fondo */}
                            <div className={`absolute -bottom-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 w-40 h-40 bg-gradient-to-t ${m.color} rounded-full blur-[50px] pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
