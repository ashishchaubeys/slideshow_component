const commonOptions = {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    allowTouchMove: false, // optional: disables manual swipe
  };

  new Swiper('.swiper-col-1', commonOptions);
  new Swiper('.swiper-col-2', { ...commonOptions, autoplay: { delay: 3500 } });
  new Swiper('.swiper-col-3', { ...commonOptions, autoplay: { delay: 4000 } });
