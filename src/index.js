import "./styles/main.scss"
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  },
});