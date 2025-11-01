// ====== Animação de Revelar ao Rolar ======
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);


// ====== Efeito de Digitação na Hero Section ======
const typingElement = document.getElementById('typing-effect');
const words = ["Dev Full-Stack", "Especialista em IA", "Criador de Soluções Web"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Se a palavra terminou de ser digitada
    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 2000); // Pausa antes de apagar
    } 
    // Se a palavra terminou de ser apagada
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
};

document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) {
        setTimeout(type, 500); // Inicia após um pequeno atraso
    }
});


// ====== Navegação Ativa ao Rolar ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#nav-menu a.nav-link');

const activateMenuAtCurrentSection = () => {
    const fromTop = window.scrollY + 80; // offset para o header

    sections.forEach(section => {
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', activateMenuAtCurrentSection);
document.addEventListener('DOMContentLoaded', activateMenuAtCurrentSection);
