
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    const hamburger = document.getElementById('hamburger');
    const menuMobile = document.getElementById('menuMobile');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.menu-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });


const track = document.querySelector('.testimonials-track');
    const items = document.querySelectorAll('.testimonial-item');

    let index = 0;
    const visibleItems = window.innerWidth <= 768 ? 1 : 3;
    const totalItems = items.length;

    function moveSlider() {
        index++;

        if (index > totalItems - visibleItems) {
            index = 0;
        }

        const itemWidth = items[0].offsetWidth + 30;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    setInterval(moveSlider, 4000);


    //REVEAL
    const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target); // anima só uma vez
            }
        });
    },
    {
        threshold: 0.15 // quando 15% do elemento aparece
    }
);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});


/* ========================= */
/* HERO SLIDER */
/* ========================= */

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // troca a cada 5 segundos    