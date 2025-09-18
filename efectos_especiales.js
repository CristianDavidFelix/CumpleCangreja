// Archivo JavaScript adicional para efectos avanzados - efectos_especiales.js

// Efectos de sonido usando Web Audio API
class SoundEffects {
    constructor() {
        this.audioContext = null;
        this.initAudio();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API no soportado');
        }
    }

    // Crear sonido de campanitas
    playBellSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    // Sonido de corazón latiendo
    playHeartbeat() {
        if (!this.audioContext) return;
        
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
                
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.1);
            }, i * 200);
        }
    }
}

// Clase para efectos visuales avanzados
class AdvancedEffects {
    constructor() {
        this.soundEffects = new SoundEffects();
        this.init();
    }

    init() {
        this.createAurora();
        this.startMagicParticles();
        this.createButterflies();
        this.startPetalRain();
        this.addHeartPulse();
    }

    // Crear efecto de aurora
    createAurora() {
        const aurora = document.createElement('div');
        aurora.className = 'aurora';
        document.body.appendChild(aurora);
    }

    // Partículas mágicas
    startMagicParticles() {
        setInterval(() => {
            this.createMagicParticle();
        }, 500);
    }

    createMagicParticle() {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Mariposas volando
    createButterflies() {
        const butterflies = ['🦋', '🧚‍♀️', '🌸'];
        
        setInterval(() => {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly';
            butterfly.innerHTML = butterflies[Math.floor(Math.random() * butterflies.length)];
            butterfly.style.top = Math.random() * 100 + '%';
            butterfly.style.animationDelay = Math.random() * 25 + 's';
            
            document.body.appendChild(butterfly);
            
            setTimeout(() => {
                if (butterfly.parentNode) {
                    butterfly.parentNode.removeChild(butterfly);
                }
            }, 25000);
        }, 8000);
    }

    // Lluvia de pétalos
    startPetalRain() {
        setInterval(() => {
            this.createPetal();
        }, 300);
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 15 + 's';
        petal.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        document.body.appendChild(petal);
        
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 15000);
    }

    // Corazones pulsantes en las esquinas
    addHeartPulse() {
        const positions = [
            { top: '10%', left: '10%' },
            { top: '10%', right: '10%' },
            { bottom: '10%', left: '10%' },
            { bottom: '10%', right: '10%' }
        ];

        positions.forEach((pos, index) => {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart-pulse';
                heart.innerHTML = '💖';
                
                Object.keys(pos).forEach(key => {
                    heart.style[key] = pos[key];
                });
                
                heart.style.animationDelay = index * 0.5 + 's';
                document.body.appendChild(heart);
            }, index * 1000);
        });
    }

    // Efecto de escritura automática
    typeWriterEffect(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        element.classList.add('typewriter');
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typewriter');
            }
        }
        
        type();
    }

    // Crear ondas de amor
    createLoveWaves(x, y) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const wave = document.createElement('div');
                wave.className = 'love-wave';
                wave.style.left = x + 'px';
                wave.style.top = y + 'px';
                wave.style.animationDelay = i * 0.5 + 's';
                
                document.body.appendChild(wave);
                
                setTimeout(() => {
                    if (wave.parentNode) {
                        wave.parentNode.removeChild(wave);
                    }
                }, 4000);
            }, i * 200);
        }
    }

    // Explosión de amor
    createLoveExplosion(x, y) {
        const loveEmojis = ['💕', '💖', '💗', '💓', '💝', '🌹', '🦀'];
        
        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = x + 'px';
            emoji.style.top = y + 'px';
            emoji.style.fontSize = '20px';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 2 + Math.random() * 3;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;
            
            emoji.style.transition = 'all 2s ease-out';
            document.body.appendChild(emoji);
            
            requestAnimationFrame(() => {
                emoji.style.transform = `translate(${dx * 50}px, ${dy * 50}px) rotate(720deg)`;
                emoji.style.opacity = '0';
            });
            
            setTimeout(() => {
                if (emoji.parentNode) {
                    emoji.parentNode.removeChild(emoji);
                }
            }, 2000);
        }
    }

    // Efecto de confeti especial
    createSpecialConfetti() {
        const colors = ['#ff6b9d', '#ffd700', '#ff1493', '#00ff7f', '#ff69b4', '#ffa500'];
        const shapes = ['💕', '⭐', '🌟', '✨', '💖', '🦀'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-50px';
                confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
                confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = 'confettiFall 4s ease-out forwards';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 4000);
            }, i * 50);
        }
    }

    // Mensaje sorpresa flotante
    showFloatingMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.innerHTML = message;
        messageEl.style.position = 'fixed';
        messageEl.style.top = '50%';
        messageEl.style.left = '50%';
        messageEl.style.transform = 'translate(-50%, -50%)';
        messageEl.style.background = 'rgba(255, 255, 255, 0.95)';
        messageEl.style.padding = '20px 30px';
        messageEl.style.borderRadius = '15px';
        messageEl.style.fontSize = '1.5rem';
        messageEl.style.fontFamily = 'Dancing Script, cursive';
        messageEl.style.color = '#ff1493';
        messageEl.style.textAlign = 'center';
        messageEl.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.5)';
        messageEl.style.zIndex = '10000';
        messageEl.style.animation = 'messageFloat 5s ease-out forwards';
        messageEl.style.border = '3px solid #ff69b4';
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 5000);
    }
}

// Agregar estilos CSS adicionales para las nuevas animaciones
const additionalStyles = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes messageFloat {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Inicializar efectos avanzados cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const advancedEffects = new AdvancedEffects();
    
    // Mensajes especiales programados
    setTimeout(() => {
        advancedEffects.showFloatingMessage('¡Mi cangrejita hermosa cumple 22! 🦀💕');
    }, 10000);
    
    setTimeout(() => {
        advancedEffects.createSpecialConfetti();
    }, 15000);
    
    setTimeout(() => {
        advancedEffects.showFloatingMessage('Eres la persona más especial del mundo 💖');
    }, 25000);
    
    // Efectos especiales en clicks
    document.addEventListener('click', function(e) {
        if (Math.random() > 0.7) {
            advancedEffects.createLoveWaves(e.clientX, e.clientY);
        }
        
        if (Math.random() > 0.8) {
            advancedEffects.createLoveExplosion(e.clientX, e.clientY);
        }
    });
    
    // Hacer que los elementos con clase especial brillen
    const glowElements = document.querySelectorAll('.main-title, .age-highlight, .signature');
    glowElements.forEach(el => {
        el.classList.add('glowing-text');
    });
    
    // Efecto de cristal en las tarjetas de mensaje (sin el resplandor giratorio)
    const messageCards = document.querySelectorAll('.love-message, .final-message');
    messageCards.forEach(card => {
        card.classList.add('glass-effect');
    });
    
    // Efecto ripple en botones
    const buttons = document.querySelectorAll('.surprise-button, .photo-placeholder');
    buttons.forEach(button => {
        button.classList.add('ripple-effect');
    });
});

// Función global para efectos especiales extras
window.CangrejitaEffects = {
    createLoveExplosion: function(x, y) {
        const effects = new AdvancedEffects();
        effects.createLoveExplosion(x, y);
    },
    
    showSpecialMessage: function(message) {
        const effects = new AdvancedEffects();
        effects.showFloatingMessage(message);
    },
    
    createConfetti: function() {
        const effects = new AdvancedEffects();
        effects.createSpecialConfetti();
    }
};