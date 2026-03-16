import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-[80px] animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[90px] animate-blob" style={{ animationDelay: '4s' }}></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 border border-primary/30 bg-primary/10 rounded-full text-primary text-sm font-semibold tracking-wider uppercase"
        >
          {t('hero_badge')}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
        >
          {t('hero_title_1')} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-blue-400">{t('hero_title_2')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12"
        >
          {t('hero_desc')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            className="group w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-theme shadow-[0_0_20px_rgba(17,82,212,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero_btn_start')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-4 glass-effect hover:bg-white/5 text-white text-lg font-bold rounded-theme transition-all transform hover:-translate-y-1 active:scale-95 text-center"
          >
            {t('hero_btn_services')}
          </a>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 mx-auto text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
