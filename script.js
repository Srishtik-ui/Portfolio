// ==================== GLOBAL VARIABLES ====================
let isThemeLight = false;

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    isThemeLight = true;
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    isThemeLight = !isThemeLight;
    
    if (isThemeLight) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==================== TYPEWRITER EFFECT ====================
const typewriterElement = document.getElementById('typewriter');
const phrases = [
    'Turning Data into Decisions',
    'Machine Learning Enthusiast',
    'Future AI Engineer',
    'Data Science Specialist'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// ==================== SKILL BARS ANIMATION ====================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}



// ==================== INTERSECTION OBSERVER ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
sections.forEach(section => {
    observer.observe(section);
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== BACK TO TOP BUTTON ====================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message
    showNotification('Thank you for your message! I will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
});

// ==================== DOWNLOAD RESUME ====================
const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Resume download will be available soon!', 'info');
    
    // In a real application, trigger actual resume download
    // window.location.href = 'path/to/resume.pdf';
});

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #4158D0 0%, #C850C0 100%)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        fontSize: '1rem',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.5s ease',
        maxWidth: '400px'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// Add notification animations to CSS dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ==================== PARTICLE ANIMATION (HERO) ====================
function createParticles() {
    const heroParticles = document.querySelector('.hero-particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'rgba(65, 88, 208, 0.3)',
            borderRadius: '50%',
            left: `${x}%`,
            top: `${y}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`
        });
        
        heroParticles.appendChild(particle);
    }
}

// Add float animation
const particleAnimation = document.createElement('style');
particleAnimation.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
        }
        25% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-60px) translateX(-20px);
            opacity: 1;
        }
        75% {
            transform: translateY(-30px) translateX(-40px);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(particleAnimation);

// Initialize particles
createParticles();

// ==================== LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== ANALYTICS (Placeholder) ====================
function trackPageView() {
    // In a real application, integrate with Google Analytics or similar
    console.log('Page view tracked:', window.location.pathname);
}

function trackEvent(category, action, label) {
    // In a real application, integrate with analytics service
    console.log('Event tracked:', { category, action, label });
}

// Track page view on load
document.addEventListener('DOMContentLoaded', () => {
    trackPageView();
});

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.currentTarget.textContent.trim();
        trackEvent('Button', 'Click', btnText);
    });
});

// ==================== PERFORMANCE MONITORING ====================
window.addEventListener('load', () => {
    // Check page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    if (loadTime > 3000) {
        console.warn('Page load time exceeds 3 seconds. Consider optimization.');
    }
});

// ==================== ACCESSIBILITY ====================
// Keyboard navigation for custom elements
document.querySelectorAll('.skill-card, .project-card, .achievement-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// Announce page changes for screen readers
function announceForScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// ==================== CURSOR EFFECT (OPTIONAL) ====================
let cursorDot, cursorOutline;

if (window.matchMedia('(pointer: fine)').matches) {
    // Create cursor elements
    cursorDot = document.createElement('div');
    cursorOutline = document.createElement('div');
    
    Object.assign(cursorDot.style, {
        width: '8px',
        height: '8px',
        background: 'rgba(65, 88, 208, 0.8)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '9999',
        transition: 'transform 0.2s ease'
    });
    
    Object.assign(cursorOutline.style, {
        width: '30px',
        height: '30px',
        border: '2px solid rgba(65, 88, 208, 0.4)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '9998',
        transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease'
    });
    
    // Uncomment to enable custom cursor
    // document.body.appendChild(cursorDot);
    // document.body.appendChild(cursorOutline);
    
    // Track cursor movement
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (cursorDot) {
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        }
    });
    
    function animateCursorOutline() {
        outlineX += (mouseX - outlineX) * 0.1;
        outlineY += (mouseY - outlineY) * 0.1;
        
        if (cursorOutline) {
            cursorOutline.style.left = outlineX - 15 + 'px';
            cursorOutline.style.top = outlineY - 15 + 'px';
        }
        
        requestAnimationFrame(animateCursorOutline);
    }
    
    // Uncomment to enable cursor animation
    // animateCursorOutline();
    
    // Expand cursor on hover
    document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorDot) cursorDot.style.transform = 'scale(2)';
            if (cursorOutline) cursorOutline.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            if (cursorDot) cursorDot.style.transform = 'scale(1)';
            if (cursorOutline) cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// ==================== SCROLL REVEAL ANIMATION ====================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.stat-card, .skill-card, .project-card, .achievement-card, .blog-card, .cert-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.stat-card, .skill-card, .project-card, .achievement-card, .blog-card, .cert-card');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ==================== PRELOADER (OPTIONAL) ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 500);
    }
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hello there!', 'color: #4158D0; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Srishti Kumari\'s Portfolio', 'color: #C850C0; font-size: 16px;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #667eea; font-size: 14px;');
console.log('%chttps://github.com/Srishtik-ui', 'color: #764ba2; font-size: 14px; text-decoration: underline;');

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ==================== SERVICE WORKER (PWA - OPTIONAL) ====================
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA functionality
    /*
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('Service Worker registered:', registration);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    */
}

// ==================== EXPORT FOR TESTING ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        trackEvent,
        announceForScreenReader
    };
}
