var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  
});