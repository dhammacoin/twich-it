const translations = {
    en: {
        'nav-features': 'Features',
        'nav-tech': 'Technology',
        'nav-download': 'Download',
        'hero-label': 'Powered by Tinode',
        'hero-title': 'Secure messenger',
        'hero-description': 'Fast and reliable messaging built on Tinode engine with modern Android architecture. End-to-end encryption, real-time delivery, and intuitive interface. Perfect for personal chats and team communication.',
        'btn-download': 'Download APK',
        'btn-github': 'View on GitHub',
        'features-title': 'Modern Messaging',
        'features-subtitle': 'Useful features for everyday communication',
        'feature-1-title': 'Real-time Messaging',
        'feature-1-desc': 'Instant message delivery powered by Tinode\'s WebSocket protocol. No delays, just pure speed.',
        'feature-2-title': 'End-to-End Encryption',
        'feature-2-desc': 'Your conversations stay private. Military-grade encryption ensures your data is secure.',
        'feature-3-title': 'File Sharing',
        'feature-3-desc': 'Share code snippets, documents, and media files. Syntax highlighting for code. Perfect for dev teams and regular users.',
        'feature-4-title': 'Group Chats',
        'feature-4-desc': 'Create channels for teams, projects, or friends. Organize discussions the way you want.',
        'feature-5-title': 'Material Design',
        'feature-5-desc': 'Clean, modern UI following Material Design guidelines. Native Android experience.',
        'feature-6-title': 'Offline Mode',
        'feature-6-desc': 'Access your messages offline. Automatic sync when connection is restored.',
        'tech-label': 'Technology Stack',
        'cta-title': 'Try Twich.IT',
        'cta-description': 'Download for Android and experience secure messaging with a modern approach.',
        'download-button': 'Download for Android',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-docs': 'Documentation',
        'footer-support': 'Support',
        'footer-copyright': '© 2024 Twich.IT Messenger. Built on Tinode engine.',
        'chat-name': 'Dev Team',
        'chat-status': '● online',
        'msg-1': 'Hey, deployed the new build 🚀',
        'msg-2': 'Perfect! Testing now',
        'msg-3': 'All endpoints working?',
        'msg-4': 'Yep, API response time is great',
        'msg-5': 'Nice! What about the new auth flow?',
        'msg-6': 'Tested it, works smoothly',
        'msg-7': 'Awesome! Ready for production?',
        'msg-8': 'Yeah, let\'s deploy 🎉',
        'input-placeholder': 'Type a message...'
    },
    ru: {
        'nav-features': 'Возможности',
        'nav-tech': 'Технологии',
        'nav-download': 'Скачать',
        'hero-label': 'На базе Tinode',
        'hero-title': 'Безопасный мессенджер',
        'hero-description': 'Быстрый и надёжный мессенджер на базе движка Tinode с современной Android архитектурой. Сквозное шифрование, доставка в реальном времени и интуитивный интерфейс. Идеален для личных чатов и командного общения.',
        'btn-download': 'Скачать APK',
        'btn-github': 'Посмотреть на GitHub',
        'features-title': 'Современный мессенджер',
        'features-subtitle': 'Полезные функции для повседневного общения',
        'feature-1-title': 'Сообщения в реальном времени',
        'feature-1-desc': 'Мгновенная доставка сообщений на базе WebSocket протокола Tinode. Никаких задержек, только чистая скорость.',
        'feature-2-title': 'Сквозное шифрование',
        'feature-2-desc': 'Ваши разговоры остаются приватными. Военное шифрование гарантирует безопасность данных.',
        'feature-3-title': 'Обмен файлами',
        'feature-3-desc': 'Делитесь фрагментами кода, документами и медиафайлами. Подсветка синтаксиса для кода. Удобно как для dev-команд, так и для обычных пользователей.',
        'feature-4-title': 'Групповые чаты',
        'feature-4-desc': 'Создавайте каналы для команд, проектов или друзей. Организуйте общение как вам удобно.',
        'feature-5-title': 'Material Design',
        'feature-5-desc': 'Чистый современный интерфейс следующий принципам Material Design. Нативный Android опыт.',
        'feature-6-title': 'Офлайн режим',
        'feature-6-desc': 'Доступ к сообщениям без интернета. Автоматическая синхронизация при восстановлении связи.',
        'tech-label': 'Технологический стек',
        'cta-title': 'Попробуйте Twich.IT',
        'cta-description': 'Скачайте для Android и испытайте безопасный мессенджер с современным подходом.',
        'download-button': 'Скачать для Android',
        'footer-privacy': 'Политика конфиденциальности',
        'footer-terms': 'Условия использования',
        'footer-docs': 'Документация',
        'footer-support': 'Поддержка',
        'footer-copyright': '© 2024 Twich.IT Мессенджер. Создан на движке Tinode.',
        'chat-name': 'Команда разработки',
        'chat-status': '● онлайн',
        'msg-1': 'Привет, задеплоил новую сборку 🚀',
        'msg-2': 'Отлично! Тестирую сейчас',
        'msg-3': 'Все эндпоинты работают?',
        'msg-4': 'Да, время отклика API отличное',
        'msg-5': 'Круто! А как новый flow авторизации?',
        'msg-6': 'Протестировал, работает плавно',
        'msg-7': 'Класс! Готово к продакшену?',
        'msg-8': 'Да, деплоим 🎉',
        'input-placeholder': 'Введите сообщение...'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all text elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update chat messages
    document.querySelectorAll('[data-chat-i18n]').forEach(element => {
        const key = element.getAttribute('data-chat-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder
    const input = document.querySelector('[data-chat-i18n-placeholder]');
    if (input && translations[lang]['input-placeholder']) {
        input.placeholder = translations[lang]['input-placeholder'];
    }
}

function toggleTheme() {
    const phoneScreen = document.getElementById('phoneScreen');
    phoneScreen.classList.toggle('light');
    
    // Update placeholder text based on theme
    const input = document.querySelector('.chat-input');
    const isLight = phoneScreen.classList.contains('light');
    input.placeholder = isLight ? 'Type a message...' : 'Type a message...';
}

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    nav.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    nav.classList.remove('active');
    burger.classList.remove('active');
}

// Smooth scroll to sections
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id && id !== '#') {
            const section = document.querySelector(id);
            if (section) {
                const headerOffset = 80;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMenu();
            }
        }
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('active')) {
        closeMenu();
    }
});

// Animate chat messages with typing indicator
window.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chatMessages');
    if (!chatContainer) return;
    
    const messages = Array.from(chatContainer.querySelectorAll('.message'));
    const typingIndicator = document.querySelector('.typing-indicator');
    const chatInput = document.querySelector('.chat-input');
    
    // Скрываем всё изначально
    messages.forEach(msg => {
        msg.style.opacity = '0';
        msg.style.transform = 'translateY(10px)';
        msg.style.display = 'none';
    });
    typingIndicator.style.display = 'none';

    let currentIndex = 0;

    function showNext() {
        if (currentIndex >= messages.length) {
            // В конце показываем typing indicator
            setTimeout(() => {
                typingIndicator.style.display = 'flex';
                typingIndicator.style.opacity = '1';
                typingIndicator.style.transform = 'translateY(0)';
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 1000);
            return;
        }

        const currentMessage = messages[currentIndex];
        const isReceived = currentMessage.classList.contains('message-received');
        
        if (isReceived) {
            // ВХОДЯЩЕЕ СООБЩЕНИЕ от собеседника
            // 1. Показываем индикатор "печатает..."
            typingIndicator.style.display = 'flex';
            typingIndicator.style.opacity = '1';
            typingIndicator.style.transform = 'translateY(0)';
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // 2. Через 2 секунды убираем индикатор и показываем сообщение
            setTimeout(() => {
                typingIndicator.style.display = 'none';
                
                currentMessage.style.display = 'block';
                setTimeout(() => {
                    currentMessage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    currentMessage.style.opacity = '1';
                    currentMessage.style.transform = 'translateY(0)';
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                    
                    // 3. Пауза для "чтения" пользователем
                    currentIndex++;
                    setTimeout(showNext, 1000);
                }, 50);
            }, 2000);
            
        } else {
            // ИСХОДЯЩЕЕ СООБЩЕНИЕ от пользователя
            // 1. Анимация набора текста в поле ввода
            const messageText = currentMessage.textContent.trim();
            let charIndex = 0;
            chatInput.value = '';
            chatInput.placeholder = '';
            
            const typingInterval = setInterval(() => {
                if (charIndex < messageText.length) {
                    chatInput.value += messageText[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    
                    // 2. Короткая пауза перед "отправкой"
                    setTimeout(() => {
                        chatInput.value = '';
                        const lang = currentLang;
                        chatInput.placeholder = translations[lang]['input-placeholder'] || 'Type a message...';
                        
                        // 3. Показываем сообщение в чате
                        currentMessage.style.display = 'block';
                        setTimeout(() => {
                            currentMessage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                            currentMessage.style.opacity = '1';
                            currentMessage.style.transform = 'translateY(0)';
                            chatContainer.scrollTop = chatContainer.scrollHeight;
                            
                            // 4. Пауза для "чтения" собеседником
                            currentIndex++;
                            setTimeout(showNext, 1000);
                        }, 50);
                    }, 400);
                }
            }, 60);
        }
    }

    // Запуск через IntersectionObserver (когда телефон виден)
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            setTimeout(showNext, 800);
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        observer.observe(phoneMockup);
    }
});