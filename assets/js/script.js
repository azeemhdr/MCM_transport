const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  autoplay: {
	delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
