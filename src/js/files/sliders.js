import Swiper, { Navigation } from 'swiper';
import "../../scss/base/swiper.scss";

function bildSliders() {
  let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
  if (sliders) {
    sliders.forEach(slider => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}

function initSliders() {
  bildSliders();

  if (document.querySelector('.agents__slider')) {
    new Swiper('.agents__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      speed: 800,
      navigation: {
        nextEl: '.agents__arrow--next',
        prevEl: '.agents__arrow--prev',

      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1268: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },

    });
  }
}

window.addEventListener("load", function (e) {
  initSliders();
});
