import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-darkSurface pt-20 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="footer-info">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-theme flex items-center justify-center">
                <img src="/assets/logo.png" alt="VORTEXA" style={{ height: '32px', width: 'auto' }} />
              </div>
              <span className="text-2xl font-bold tracking-tight">VORTEXA</span>
            </div>
            <p className="text-gray-400">{t('footer_slogan')}</p>
          </div>

          <div className="footer-links">
            <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">{t('footer_socials')}</h4>
            <div className="flex flex-col gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="https://wa.me/521234567890" target="_blank" rel="noreferrer" className="inline-block mt-2">
                <span className="bg-[#25D366] text-white px-4 py-2 rounded-theme hover:bg-[#1ebd59] transition-colors shadow-lg">WhatsApp Chat</span>
              </a>
            </div>
          </div>

          <div className="footer-form">
            <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">{t('footer_contact_title')}</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <input type="text" placeholder={t('footer_placeholder_name')} className="bg-darkBg border border-white/10 rounded-theme px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder={t('footer_placeholder_email')} className="bg-darkBg border border-white/10 rounded-theme px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              <textarea placeholder={t('footer_placeholder_msg')} className="bg-darkBg border border-white/10 rounded-theme px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-24 resize-none"></textarea>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-theme transition-all transform hover:-translate-y-1 mt-2">{t('footer_btn_send')}</button>
            </form>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
