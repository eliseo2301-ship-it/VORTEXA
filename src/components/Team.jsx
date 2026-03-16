import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Team = () => {
    const { t } = useLanguage();
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the beginning
        }
    };

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
                        className="w-full max-w-md rounded-[2rem] overflow-hidden group border border-white/5 bg-transparent relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Video setup */}
                        <video 
                            ref={videoRef}
                            src="/assets/team_video.mp4" 
                            muted 
                            loop 
                            playsInline
                            poster="/assets/team_banner.png"
                            className="w-full h-auto object-cover rounded-[2rem] shadow-[0_0_50px_rgba(17,82,212,0.3)] group-hover:shadow-[0_0_80px_rgba(17,82,212,0.5)] transition-all duration-700 cursor-pointer"
                        />
                        
                        {/* Overlay text for instruction */}
                        <div className="absolute inset-0 bg-darkBg/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center pointer-events-none rounded-[2rem]">
                            <span className="text-white/60 bg-darkBg/40 px-4 py-2 rounded-full backdrop-blur-sm text-sm border border-white/10 uppercase tracking-widest font-semibold flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                {t('language') === 'es' ? 'Pasa el cursor para saludar' : 'Hover to wave'}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
