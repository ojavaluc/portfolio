// ==========================================================================
// Portfólio Lucas Freitas — Interações, Scroll Reveal & Carrossel 16:9
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initFuturisticHeroIntro();
    initScrollReveal();
    initTypingEffect();
    initActiveNavigation();
    initMobileMenu();
    initCareerCarousel();
});

// ====== 0. Animação de Abertura Futurista (Decodificação Rápida na Hero) ======
function initFuturisticHeroIntro() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const heroNameEl = document.querySelector('#home h1 > span:first-child');
    if (!heroNameEl) return;

    const finalText = heroNameEl.textContent.trim();
    const glyphs = '01<>/_#[]*+=-';
    const totalFrames = 14;
    let frame = 0;

    const decodeStep = () => {
        frame++;
        const progress = frame / totalFrames;
        const revealedCount = Math.floor(progress * finalText.length);

        let output = '';
        for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === ' ') {
                output += ' ';
            } else if (i < revealedCount) {
                output += finalText[i];
            } else {
                output += glyphs[(i + frame) % glyphs.length];
            }
        }

        heroNameEl.textContent = output;

        if (frame < totalFrames) {
            requestAnimationFrame(decodeStep);
        } else {
            heroNameEl.textContent = finalText;
        }
    };

    setTimeout(() => {
        requestAnimationFrame(decodeStep);
    }, 120);
}

// ====== 1. Scroll Reveal com IntersectionObserver ======
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0.12,
                rootMargin: '0px 0px -60px 0px'
            }
        );

        revealElements.forEach((el) => revealObserver.observe(el));
    } else {
        // Fallback para navegadores antigos
        revealElements.forEach((el) => el.classList.add('active'));
    }
}

// ====== 2. Efeito de Digitação na Hero Section ======
function initTypingEffect() {
    const typingElement = document.getElementById('typing-effect');
    if (!typingElement) return;

    const words = [
        'Liderança & Gestão de Suporte/CX',
        'Infraestrutura de Redes & NOC',
        'Desenvolvimento & Automação',
        'Ciência de Dados & IA'
    ];

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

        let nextDelay = isDeleting ? 45 : 95;

        if (!isDeleting && charIndex === currentWord.length) {
            nextDelay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            nextDelay = 350;
        }

        setTimeout(type, nextDelay);
    };

    setTimeout(type, 350);
}

// ====== 3. Navegação Ativa ao Rolar ======
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-menu a.nav-link');

    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 140;

        sections.forEach((section) => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                const currentId = section.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${currentId}`
                    );
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

// ====== 4. Menu Mobile ======
function initMobileMenu() {
    const btnMobile = document.getElementById('btn-mobile');
    const menuMobile = document.getElementById('menu-mobile');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!btnMobile || !menuMobile) return;

    btnMobile.addEventListener('click', () => {
        const isHidden = menuMobile.classList.toggle('hidden');
        btnMobile.setAttribute('aria-expanded', String(!isHidden));
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuMobile.classList.add('hidden');
            btnMobile.setAttribute('aria-expanded', 'false');
        });
    });
}

// ====== 5. Carrossel Único de Trajetória & Conquistas ======
function initCareerCarousel() {
    const track = document.getElementById('carousel-track');
    const viewport = document.getElementById('carousel-viewport');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');
    const stepCounter = document.getElementById('carousel-step-counter');
    const captionTitle = document.getElementById('carousel-caption-title');
    const captionDesc = document.getElementById('carousel-caption-desc');

    if (!track || !viewport) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const activeImg = track.querySelector('.carousel-slide.is-active .carousel-img');
    const activeBadge = track.querySelector('.carousel-slide.is-active .carousel-badge');
    const activeMediaContainer = track.querySelector('.carousel-slide.is-active .carousel-media-container');
    const activeOverlay = track.querySelector('.carousel-slide.is-active .carousel-gradient-overlay');

    const slidesData = [
        {
            step: '01 / 03',
            src: 'assets/img/msolnet-noc-infraestrutura.jpg',
            alt: 'Bastidores da infraestrutura de rede e rack de servidores MikroTik Cloud Core Router na Msolnet',
            isCertificate: false,
            badgeClass: 'carousel-badge badge-career',
            badgeDotClass: 'w-2 h-2 rounded-full bg-sky-400',
            badgeText: 'Carreira \u2022 Msolnet (NOC & Infraestrutura)',
            title: 'Infraestrutura Core & Opera\u00e7\u00e3o NOC na Msolnet',
            description:
                'Gest\u00e3o e monitoramento de ativos cr\u00edticos de telecomunica\u00e7\u00f5es, incluindo roteadores de borda/concentradores MikroTik Cloud Core Router (CCR), switches CRS 10G, distribui\u00e7\u00e3o \u00f3ptica e supervis\u00e3o t\u00e9cnica para alta disponibilidade.'
        },
        {
            step: '02 / 03',
            src: 'assets/img/bizz-equipe-premio-ra.jpg',
            alt: 'Equipe de atendimento e suporte da Bizz Internet celebrando a indica\u00e7\u00e3o ao Pr\u00eamio Reclame AQUI',
            isCertificate: false,
            badgeClass: 'carousel-badge badge-award',
            badgeDotClass: 'w-2 h-2 rounded-full bg-amber-400',
            badgeText: 'Carreira \u2022 Bizz Internet (#Pr\u00eamioRA)',
            title: 'Excel\u00eancia em Atendimento na Bizz Internet \u2014 Pr\u00eamio Reclame AQUI',
            description:
                'Registro com a equipe de suporte e atendimento da Bizz Internet celebrando a indica\u00e7\u00e3o ao Pr\u00eamio Reclame AQUI (#Pr\u00eamioRA), marco in\u00e9dito como a primeira provedora do Vale do Jequitinhonha indicada \u00e0 premia\u00e7\u00e3o.'
        },
        {
            step: '03 / 03',
            src: 'assets/img/certificado-harvard-cs50.jpg',
            alt: 'Certificado verificado CS50x Introduction to Computer Science da Harvard University emitido para Lucas Alves de Freitas',
            isCertificate: true,
            badgeClass: 'carousel-badge badge-cert',
            badgeDotClass: 'w-2 h-2 rounded-full bg-emerald-400',
            badgeText: 'Certifica\u00e7\u00e3o \u2022 Harvard University (CS50x)',
            title: 'Certifica\u00e7\u00e3o Internacional CS50x \u2014 Harvard University',
            description:
                'Certificado verificado de conclus\u00e3o do curso CS50: Introduction to Computer Science da Universidade de Harvard (edX), consolidando fundamentos de algoritmos, estruturas de dados em C, Python, SQL e desenvolvimento web.'
        }
    ];

    let currentIndex = 0;
    const totalSlides = slidesData.length;
    let touchStartX = 0;
    let touchEndX = 0;

    const goToSlide = (index) => {
        currentIndex = (index + totalSlides) % totalSlides;
        const currentSlideData = slidesData[currentIndex];

        if (slides.length > 1) {
            // Alterna o slide ativo garantindo que a imagem e a badge do slide atual fiquem 100% visiveis
            track.style.transform = 'none';
            slides.forEach((slide, idx) => {
                const isCurrent = idx === currentIndex;
                slide.classList.toggle('is-active', isCurrent);
                const slideImg = slide.querySelector('.carousel-img');
                if (slideImg && slidesData[idx]) {
                    if (slideImg.getAttribute('src') !== slidesData[idx].src) {
                        slideImg.setAttribute('src', slidesData[idx].src);
                    }
                    slideImg.setAttribute('alt', slidesData[idx].alt);
                }
            });
        } else if (activeImg) {
            // Fallback seguro caso haja apenas 1 slide container no DOM
            activeImg.src = currentSlideData.src;
            activeImg.alt = currentSlideData.alt;
            activeImg.className = currentSlideData.isCertificate
                ? 'carousel-img carousel-img-contain'
                : 'carousel-img carousel-img-cover';
            if (activeMediaContainer) {
                activeMediaContainer.classList.toggle(
                    'carousel-media-certificate',
                    currentSlideData.isCertificate
                );
            }
            if (activeOverlay) {
                activeOverlay.style.display = currentSlideData.isCertificate ? 'none' : '';
            }
            if (activeBadge) {
                activeBadge.className = currentSlideData.badgeClass;
                activeBadge.innerHTML = `<span class="${currentSlideData.badgeDotClass}"></span> ${currentSlideData.badgeText}`;
            }
        }

        // Atualiza legenda e contador
        if (stepCounter) stepCounter.textContent = currentSlideData.step;
        if (captionTitle) captionTitle.textContent = currentSlideData.title;
        if (captionDesc) captionDesc.textContent = currentSlideData.description;

        // Atualiza dots
        dots.forEach((dot, idx) => {
            const isActive = idx === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', String(isActive));
        });
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const targetSlide = Number(dot.getAttribute('data-slide'));
            if (!Number.isNaN(targetSlide)) {
                goToSlide(targetSlide);
            }
        });
    });

    // Suporte a teclado quando focado no carrossel
    const carouselWrapper = document.getElementById('career-carousel');
    if (carouselWrapper) {
        carouselWrapper.setAttribute('tabindex', '0');
        carouselWrapper.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToSlide(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                goToSlide(currentIndex + 1);
            }
        });
    }

    // Suporte a Touch Swipe no celular
    viewport.addEventListener(
        'touchstart',
        (e) => {
            touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
    );

    viewport.addEventListener(
        'touchend',
        (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;
            const minSwipeDistance = 45;

            if (swipeDistance < -minSwipeDistance) {
                goToSlide(currentIndex + 1);
            } else if (swipeDistance > minSwipeDistance) {
                goToSlide(currentIndex - 1);
            }
        },
        { passive: true }
    );
}
