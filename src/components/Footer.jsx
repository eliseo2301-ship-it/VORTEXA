import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !service) return;
    
    const intro = language === 'en' ? 'Hello VORTEXA, my name is' : 'Hola VORTEXA, mi nombre es';
    const interest = language === 'en' ? 'I am interested in information about:' : 'Me interesa información sobre:';
    
    const message = `${intro} ${name}. ${interest} ${service}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/529985265108?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
              <a 
                href="https://www.facebook.com/profile.php?id=61579576267068" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2]/20 group-hover:text-[#1877F2] transition-colors">
                  <Facebook size={18} />
                </div>
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/vortexa1603/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E4405F]/20 group-hover:text-[#E4405F] transition-colors">
                  <Instagram size={18} />
                </div>
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/521234567890" target="_blank" rel="noreferrer" className="inline-block mt-2">
                <span className="bg-[#25D366] text-white px-4 py-2 rounded-theme hover:bg-[#1ebd59] transition-colors shadow-lg">WhatsApp Chat</span>
              </a>
            </div>
          </div>

          <div className="footer-form">
            <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">{t('footer_contact_title')}</h4>
            
            <a 
              href="mailto:vortexa1603@gmail.com" 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group mb-6"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Mail size={18} />
              </div>
              <span>vortexa1603@gmail.com</span>
            </a>

            <form onSubmit={handleWhatsApp} className="flex flex-col gap-4">
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('footer_placeholder_name')} 
                className="bg-darkBg border border-white/10 rounded-theme px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                required
              />
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-darkBg border border-white/10 rounded-theme px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                required
              >
                <option value="" disabled>{t('footer_service_default')}</option>
                <option value={t('footer_service_app')}>{t('footer_service_app')}</option>
                <option value={t('footer_service_web')}>{t('footer_service_web')}</option>
                <option value={t('footer_service_mkt')}>{t('footer_service_mkt')}</option>
              </select>
              <button type="submit" className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 rounded-theme transition-all transform hover:-translate-y-1 mt-2 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                </svg>
                {t('footer_btn_whatsapp')}
              </button>
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
