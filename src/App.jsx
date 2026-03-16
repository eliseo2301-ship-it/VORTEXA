import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ParticleBackground from './components/ParticleBackground';
import { useLanguage } from './context/LanguageContext';
import './index.css';

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="App antialiased text-white relative">
      <ParticleBackground />
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-theme flex items-center justify-center">
              <img src="/assets/logo.png" alt="VORTEXA" style={{ height: '32px', width: 'auto' }} />
            </div>
            <span className="text-2xl font-bold tracking-tight">VORTEXA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">{t('nav_about')}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t('nav_services')}</a>
            <a href="#team" className="hover:text-primary transition-colors">{t('nav_team')}</a>
            <button className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-theme font-medium transition-all transform active:scale-95" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              {t('nav_contact')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="ml-4 border border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center gap-2"
              title="Change Language"
            >
              <span className={language === 'es' ? 'text-primary drop-shadow-[0_0_8px_rgba(17,82,212,0.8)]' : 'text-gray-400 opacity-50'}>ES</span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className={language === 'en' ? 'text-primary drop-shadow-[0_0_8px_rgba(17,82,212,0.8)]' : 'text-gray-400 opacity-50'}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Team />
      </main>

      <Footer />
      <div id="contact">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
