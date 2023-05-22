// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
  });

  