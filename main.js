// Click event for burger menu

const navBurger = document.querySelector('#nav-icon');
navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
});

// Header image slideshow
let current = 0,
  slides = document.querySelectorAll('.header-image');

setInterval(function () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000);
