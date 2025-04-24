const swiper = new Swiper(".project-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  autoplay: {
	delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768:{
      slidesPerView:3,
      spaceBetween:30,
    },
    992:{
      slidesPerView:4,
      spaceBetween:30,
    }
},
});

const testimonial = new Swiper(".testimonial-carousel", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
})