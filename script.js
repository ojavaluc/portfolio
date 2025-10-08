const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) { // O elemento aparece quando está a 100px de entrar na tela
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Ativa a animação para os elementos que já estão na tela ao carregar
document.addEventListener('DOMContentLoaded', revealOnScroll);
