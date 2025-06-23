function toggleMenu() {
    const nav = document.getElementById("mainNav");
    const user = document.querySelector(".user-section");
    nav.classList.toggle("open");
    user.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const leftBtn = document.querySelector(".slider-btn.left");
    const rightBtn = document.querySelector(".slider-btn.right");

    const scrollStep = 300;

    leftBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    });
});




const slider = document.getElementById('slider');
const scrollIndicator = document.getElementById('scrollIndicator');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

const scrollStep = 300;

// Երբ էջը բեռնվում է՝ մի փոքր scroll անի ձախից
window.addEventListener('load', () => {
    slider.scrollLeft = scrollStep;
    updateProgressBar();
});

// Աջ կոճակը սահեցնում է առաջ
scrollRightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

// Ձախ կոճակը սահեցնում է հետ
scrollLeftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

// Scroll-ի ժամանակ թարմացվում է կապույտ progress-ը
slider.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    const percentage = (scrollLeft / maxScroll) * 100;
    scrollIndicator.style.width = `${percentage}%`;
}


const swiper = new Swiper(".interesting-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2.5,
        }
    }
});