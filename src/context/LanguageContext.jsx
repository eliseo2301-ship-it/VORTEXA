import React, { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    // Nav
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_team: 'Equipo',
    nav_contact: 'Contacto',

    // Hero
    hero_badge: 'Liderando la Revolución Digital',
    hero_title_1: 'Donde la Tecnología se',
    hero_title_2: 'Encuentra con la Creatividad',
    hero_desc: 'Agencia líder en el desarrollo de aplicaciones inteligentes, sitios web a medida y estrategias de marketing digital que transforman negocios en leyendas digitales.',
    hero_btn_start: 'Inicia tu Transformación',
    hero_btn_services: 'Ver Servicios',

    // About
    about_title: 'FILOSOFÍA CORPORATIVA',
    about_desc: 'En VORTEXA, no solo desarrollamos aplicaciones; construimos el motor digital que impulsa a las empresas hacia el futuro. Nuestra identidad se basa en la convergencia de la ingeniería de infraestructura robusta y la creatividad de vanguardia.',
    about_mission_title: 'MISIÓN',
    about_mission_desc: 'Impulsar la evolución digital mediante aplicaciones disruptivas y arquitecturas de software de alta disponibilidad, fusionando diseño de vanguardia con seguridad de grado corporativo.',
    about_vision_title: 'VISIÓN',
    about_vision_desc: 'Ser el referente global en ecosistemas digitales, transformando ideas complejas en soluciones escalables que definen el futuro de la tecnología móvil.',
    about_pillars_title: 'NUESTROS PILARES',
    about_pillar_1_title: 'Innovación Radical:',
    about_pillar_1_desc: 'Exploramos constantemente nuevas tecnologías para ofrecer soluciones fuera de lo convencional.',
    about_pillar_2_title: 'Compromiso de Infraestructura:',
    about_pillar_2_desc: 'Garantizamos que cada solución sea estable, segura y escalable bajo estándares de clase mundial.',
    about_pillar_3_title: 'Transparencia y Ética:',
    about_pillar_3_desc: 'La claridad en los procesos de desarrollo es nuestra firma de profesionalismo.',
    about_slogan: 'En VORTEXA, su visión encuentra el código que la hace realidad.',

    // Services
    services_title: 'Nuestros Servicios',
    services_subtitle: 'Soluciones integrales para la era digital.',
    service_1_title: 'Creación de Aplicaciones',
    service_1_desc: 'Desarrollamos apps inteligentes, creativas y de alto rendimiento. Desde la concepción hasta el despliegue, combinamos IA y diseño para UX excepcional.',
    service_2_title: 'Páginas Web a Medida',
    service_2_desc: 'Diseños personalizados que respiran la identidad de tu marca. Optimizadas para velocidad, SEO y conversión en cualquier dispositivo.',
    service_3_title: 'Marketing Digital',
    service_3_desc: 'Campañas estratégicas que dominan las redes sociales. No solo generamos visualizaciones, construimos comunidades y retorno de inversión.',

    // Team
    team_title: 'Nuestro Equipo',
    team_subtitle: 'Liderazgo, visión y ejecución técnica.',
    team_role_1: 'Director Comercial',
    team_role_2: 'Director de Desarrollo',

    // Footer
    footer_slogan: 'Transformando el futuro, byte a byte.',
    footer_socials: 'Redes Sociales',
    footer_contact_title: 'Contáctanos',
    footer_placeholder_name: 'Nombre',
    footer_placeholder_email: 'Email',
    footer_placeholder_msg: 'Tu mensaje',
    footer_service_default: 'Selecciona un servicio...',
    footer_service_app: 'Desarrollo de App',
    footer_service_web: 'Página Web a Medida',
    footer_service_mkt: 'Marketing Digital',
    footer_btn_send: 'Enviar Mensaje',
    footer_btn_whatsapp: 'Enviar WhatsApp',
    footer_rights: '© 2026 VORTEXA Technologies. Todos los derechos reservados.',

    // Chatbot
    chat_header: 'Asistente VORTEXA',
    chat_bot_ask_name: '¡Hola! Soy el asistente virtual de VORTEXA. ¿Me podrías indicar tu nombre?',
    chat_placeholder_name: 'Escribe tu nombre...',
    chat_bot_greet: '¡Mucho gusto, {{name}}! ¿En qué te podemos ayudar el día de hoy?',
    chat_opt_app: 'Aplicación',
    chat_opt_web: 'Sitio Web',
    chat_opt_mkt: 'Marketing',
    chat_opt_appweb: 'App Web',
    chat_opt_schedule_only: 'Solo Agendar Cita',
    chat_bot_service_reply: 'Excelente, contamos con expertos en {{service}}. ¿Te gustaría agendar una cita con un asesor?',
    chat_opt_schedule: 'Agendar Cita',
    chat_bot_ask_location: '¿En qué ciudad te interesa agendar tu cita?',
    chat_bot_final_reply: 'Perfecto, {{name}}. Para tu cita en {{location}}, comunícate a {{phoneText}}: {{phoneDisplay}}.',
    chat_val_cancun: 'Cancún',
    chat_val_cdmx: 'CDMX',
    chat_phone_text_cancun: 'nuestras oficinas en Cancún al número',
    chat_phone_text_cdmx: 'nuestras oficinas en CDMX al número',
    chat_btn_restart: 'Reiniciar Chat'
  },
  en: {
    // Nav
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_team: 'Team',
    nav_contact: 'Contact',

    // Hero
    hero_badge: 'Leading the Digital Revolution',
    hero_title_1: 'Where Technology',
    hero_title_2: 'Meets Creativity',
    hero_desc: 'Leading agency in the development of intelligent applications, custom websites, and digital marketing strategies that transform businesses into digital legends.',
    hero_btn_start: 'Start Your Transformation',
    hero_btn_services: 'View Services',

    // About
    about_title: 'CORPORATE PHILOSOPHY',
    about_desc: 'At VORTEXA, we don’t just develop applications; we build the digital engine that drives companies into the future. Our identity is based on the convergence of robust infrastructure engineering and cutting-edge creativity.',
    about_mission_title: 'MISSION',
    about_mission_desc: 'To drive digital evolution through disruptive applications and high-availability software architectures, merging avant-garde design with enterprise-grade security.',
    about_vision_title: 'VISION',
    about_vision_desc: 'To be the global benchmark in digital ecosystems, transforming complex ideas into scalable solutions that define the future of mobile technology.',
    about_pillars_title: 'OUR PILLARS',
    about_pillar_1_title: 'Radical Innovation:',
    about_pillar_1_desc: 'We constantly explore new technologies to deliver unconventional solutions.',
    about_pillar_2_title: 'Infrastructure Commitment:',
    about_pillar_2_desc: 'We ensure every solution is stable, secure, and scalable under world-class standards.',
    about_pillar_3_title: 'Transparency and Ethics:',
    about_pillar_3_desc: 'Clarity in development processes is our signature of professionalism.',
    about_slogan: 'At VORTEXA, your vision finds the code to make it real.',

    // Services
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive solutions for the digital age.',
    service_1_title: 'App Creation',
    service_1_desc: 'We develop intelligent, creative, and high-performance apps. From conception to deployment, we combine AI and design for an exceptional UX.',
    service_2_title: 'Custom Websites',
    service_2_desc: 'Custom designs that breathe your brand\'s identity. Optimized for speed, SEO, and conversion on any device.',
    service_3_title: 'Digital Marketing',
    service_3_desc: 'Strategic campaigns that dominate social media. We don\'t just generate views; we build communities and ROI.',

    // Team
    team_title: 'Our Team',
    team_subtitle: 'Leadership, vision, and technical execution.',
    team_role_1: 'Commercial Director',
    team_role_2: 'CTO & Development',

    // Footer
    footer_slogan: 'Transforming the future, byte by byte.',
    footer_socials: 'Social Media',
    footer_contact_title: 'Contact Us',
    footer_placeholder_name: 'Name',
    footer_placeholder_email: 'Email',
    footer_placeholder_msg: 'Your message',
    footer_service_default: 'Select a service...',
    footer_service_app: 'App Development',
    footer_service_web: 'Custom Website',
    footer_service_mkt: 'Digital Marketing',
    footer_btn_send: 'Send Message',
    footer_btn_whatsapp: 'Send WhatsApp',
    footer_rights: '© 2026 VORTEXA Technologies. All rights reserved.',

    // Chatbot
    chat_header: 'VORTEXA Assistant',
    chat_bot_ask_name: 'Hello! I am VORTEXA\'s virtual assistant. Could you tell me your name?',
    chat_placeholder_name: 'Type your name...',
    chat_bot_greet: 'Nice to meet you, {{name}}! How can we help you today?',
    chat_opt_app: 'Mobile App',
    chat_opt_web: 'Website',
    chat_opt_mkt: 'Marketing',
    chat_opt_appweb: 'Web App',
    chat_opt_schedule_only: 'Just Schedule Appointment',
    chat_bot_service_reply: 'Excellent, we have experts in {{service}}. Would you like to schedule an appointment with an advisor?',
    chat_opt_schedule: 'Schedule Appointment',
    chat_bot_ask_location: 'In which city would you like to schedule your appointment?',
    chat_bot_final_reply: 'Perfect, {{name}}. For your appointment in {{location}}, please contact {{phoneText}}: {{phoneDisplay}}.',
    chat_val_cancun: 'Cancun',
    chat_val_cdmx: 'CDMX',
    chat_phone_text_cancun: 'our Cancun offices at',
    chat_phone_text_cdmx: 'our CDMX offices at',
    chat_btn_restart: 'Restart Chat'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  const t = (key, variables = {}) => {
    let str = translations[language][key] || key;
    
    // Simple template string replacement for {{variable}}
    Object.keys(variables).forEach(varKey => {
        str = str.replace(`{{${varKey}}}`, variables[varKey]);
    });
    
    return str;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
