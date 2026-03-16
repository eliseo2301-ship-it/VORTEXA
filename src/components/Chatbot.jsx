import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Chatbot = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState('askName');
    const [userName, setUserName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Initialize first message properly with translation
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{ text: t('chat_bot_ask_name'), type: 'bot' }]);
        }
        scrollToBottom();
    }, [messages, step, t]);

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const name = inputValue.trim();
        setUserName(name);
        setMessages([...messages, 
            { text: name, type: 'user' },
            { text: t('chat_bot_greet', { name }), type: 'bot' }
        ]);
        setInputValue('');
        setStep('chooseService');
    };

    const handleServiceSelect = (serviceKey, serviceTranslation) => {
        setMessages([...messages, 
            { text: serviceTranslation, type: 'user' },
            { text: t('chat_bot_service_reply', { service: serviceTranslation }), type: 'bot' }
        ]);
        setStep('askAppointment');
    };

    const handleAgendaClick = () => {
        setMessages([...messages, 
            { text: t('chat_opt_schedule'), type: 'user' },
            { text: t('chat_bot_ask_location'), type: 'bot' }
        ]);
        setStep('chooseLocation');
    };

    const handleLocationSelect = (locationKey) => {
        const locationName = t(locationKey);
        let phoneText = "";
        let phoneLink = "";
        let phoneDisplay = "";
        
        if (locationKey === 'chat_val_cancun') {
            phoneText = t('chat_phone_text_cancun');
            phoneLink = "https://wa.me/529985265108";
            phoneDisplay = "998 526 5108";
        } else if (locationKey === 'chat_val_cdmx') {
            phoneText = t('chat_phone_text_cdmx');
            phoneLink = "https://wa.me/525542146603";
            phoneDisplay = "55 4214 6603";
        }
        
        setMessages([...messages, 
            { text: locationName, type: 'user' },
            { text: t('chat_bot_final_reply', { name: userName || 'cliente', location: locationName, phoneText, phoneDisplay }), type: 'bot' }
        ]);
        setStep('end');
    };

    return (
        <div className="chatbot-wrapper">
            <button className="bot-toggle btn-primary" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div className="glass chat-window animate-fade">
                    <div className="chat-header">
                        <h4>{t('chat_header')}</h4>
                    </div>
                    <div className="chat-body">
                        {messages.map((m, i) => (
                            <div key={i} className={`msg-bubble ${m.type}`}>
                                {m.text}
                            </div>
                        ))}
                        
                        {step === 'askName' && (
                            <form onSubmit={handleNameSubmit} className="chat-input-form">
                                <input 
                                    type="text" 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={t('chat_placeholder_name')}
                                    className="chat-input"
                                    autoFocus
                                />
                                <button type="submit" className="btn btn-primary btn-sm">→</button>
                            </form>
                        )}

                        {step === 'chooseService' && (
                            <div className="chat-options">
                                <button className="btn btn-primary btn-sm" onClick={() => handleServiceSelect('chat_opt_app', t('chat_opt_app'))}>{t('chat_opt_app')}</button>
                                <button className="btn btn-primary btn-sm" onClick={() => handleServiceSelect('chat_opt_web', t('chat_opt_web'))}>{t('chat_opt_web')}</button>
                                <button className="btn btn-primary btn-sm" onClick={() => handleServiceSelect('chat_opt_mkt', t('chat_opt_mkt'))}>{t('chat_opt_mkt')}</button>
                                <button className="btn btn-primary btn-sm" onClick={() => handleServiceSelect('chat_opt_appweb', t('chat_opt_appweb'))}>{t('chat_opt_appweb')}</button>
                                <button className="btn btn-secondary btn-sm" onClick={handleAgendaClick}>{t('chat_opt_schedule_only')}</button>
                            </div>
                        )}

                        {step === 'askAppointment' && (
                            <div className="chat-options">
                                <button className="btn btn-primary btn-sm" onClick={handleAgendaClick}>{t('chat_opt_schedule')}</button>
                            </div>
                        )}

                        {step === 'chooseLocation' && (
                            <div className="chat-options">
                                <button className="btn btn-primary btn-sm" onClick={() => handleLocationSelect('chat_val_cancun')}>{t('chat_val_cancun')}</button>
                                <button className="btn btn-primary btn-sm" onClick={() => handleLocationSelect('chat_val_cdmx')}>{t('chat_val_cdmx')}</button>
                            </div>
                        )}

                        {step === 'end' && (
                            <div className="chat-options">
                                {messages[messages.length - 1].text.includes('5108') && (
                                    <a href="https://wa.me/529985265108" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm btn-link">WhatsApp Cancún</a>
                                )}
                                {messages[messages.length - 1].text.includes('6603') && (
                                    <a href="https://wa.me/525542146603" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm btn-link">WhatsApp CDMX</a>
                                )}
                                <button className="btn btn-secondary btn-sm" onClick={() => {
                                    setMessages([{ text: t('chat_bot_ask_name'), type: 'bot' }]);
                                    setStep('askName');
                                    setUserName('');
                                }}>{t('chat_btn_restart')}</button>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                </div>
            )}

            <style>{`
        .chatbot-wrapper { position: fixed; bottom: 30px; right: 30px; z-index: 1000; }
        .bot-toggle {
          width: 60px; height: 60px; border-radius: 50%; border: none; font-size: 24px;
          cursor: pointer; box-shadow: var(--glass-shadow);
        }
        .chat-window {
          position: absolute; bottom: 80px; right: 0; width: 350px; height: 450px;
          display: flex; flex-direction: column; overflow: hidden;
        }
        .chat-header { padding: 15px; border-bottom: 1px solid var(--glass-border); background: rgba(0,0,0,0.2); }
        .chat-body { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
        .msg-bubble { padding: 10px 15px; border-radius: 15px; max-width: 80%; word-break: break-word; }
        .bot { align-self: flex-start; background: var(--bg-card); border: 1px solid var(--glass-border); }
        .user { align-self: flex-end; background: var(--primary); color: white; }
        .chat-options { display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
        .chat-input-form { display: flex; gap: 10px; margin-top: 10px; }
        .chat-input { flex: 1; padding: 8px 12px; border-radius: 20px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.1); color: white; outline: none; }
        .chat-input::placeholder { color: rgba(255,255,255,0.6); }
        .btn-sm { padding: 5px 10px; font-size: 0.8rem; }
        .btn-link { text-decoration: none; display: inline-block; }
        .btn-secondary { background: rgba(255,255,255,0.1); border: 1px solid var(--glass-border); color: white; border-radius: 20px; transition: all 0.3s; cursor: pointer; }
        .btn-secondary:hover { background: rgba(255,255,255,0.2); transform: scale(0.95); }
      `}</style>
        </div>
    );
};

export default Chatbot;
