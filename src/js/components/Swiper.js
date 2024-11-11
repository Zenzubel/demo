import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

const swiper = new Swiper('.top-swiper-js', {
  modules: [Navigation, Pagination, Autoplay],

  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: false,
  centeredSlides: false,
  autoplay: {
    delay: 7000,
  },
  speed: 1800,

  pagination: {
    el: '.swiper-pagination-js',
    // clickable: true,
  },

  navigation: {
    nextEl: '.btn-next-js',
    prevEl: '.btn-prev-js',
  },

  breakpoints: {
    769: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
});

function swiperBanner(banner, pagination) {
  if (banner) {
    const swiper = new Swiper(banner, {
      modules: [Pagination, Autoplay],

      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: false,
      centeredSlides: false,
      allowTouchMove: true,
      autoplay: {
        delay: 3500,
      },
      speed: 1600,

      pagination: {
        el: pagination,
      },

      breakpoints: {
        769: {
          spaceBetween: 20,
        },
      },
    });
  }
}
swiperBanner('.banner-js', '.banner-pagination-js');

function swiperPublic(publicate, navPrev, navNext) {
  if (publicate) {
    const swiper = new Swiper(publicate, {
      modules: [Navigation],

      loop: false,
      slidesPerView: 1.1,
      spaceBetween: 12,
      freeMode: false,
      centeredSlides: false,
      allowTouchMove: true,
      // autoplay: {
      // 	delay: 3500,
      // },
      speed: 600,

      navigation: {
        nextEl: navNext,
        prevEl: navPrev,
      },

      breakpoints: {
        375: {
          slidesPerView: 1.3,
        },
        480: {
          slidesPerView: 2.2,
        },
        568: {
          slidesPerView: 2.7,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 3.2,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 5,
        },
      },
    });
  }
}
swiperPublic('.public-js', '.btn-prev-js', '.btn-next-js');

function swiperCardPage(pageCard, pageCardThumb, navPrev, navNext, pagination) {
  if (pageCard) {
    const swiperThumbCard = new Swiper(pageCardThumb, {
      loop: false,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      spaceBetween: 0,
      freeMode: false,
      centeredSlides: false,
      allowTouchMove: true,

      breakpoints: {
        568: {
          spaceBetween: 0,
        },
        1024: {
          spaceBetween: 0,
        },
      },
    });

    const swiperMainCard = new Swiper(pageCard, {
      modules: [Navigation, Thumbs, Pagination],

      loop: false,
      slidesPerView: 1,
      spaceBetween: 12,
      freeMode: false,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 1300,

      navigation: {
        nextEl: navNext,
        prevEl: navPrev,
      },

      thumbs: {
        swiper: swiperThumbCard,
      },

      pagination: {
        el: pagination,
      },

      breakpoints: {
        568: {
          spaceBetween: 15,
        },
        1024: {
          spaceBetween: 20,
        },
      },
    });
  }
}
swiperCardPage(
  '.page-card-slider-js',
  '.page-card-thumb-slider-js',
  '.page-card-prev-js',
  '.page-card-next-js',
  '.page-card-pagination-js'
);

function swiperComparison(selector1, selector2) {
  if (selector1) {
    const swiperDiscription = new Swiper(selector2, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      centeredSlides: false,
      allowTouchMove: false,
    });

    const swiper = new Swiper(selector1, {
      modules: [Navigation, Pagination, Thumbs],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: false,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination-js',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            ' из' +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      navigation: {
        nextEl: '.btn-next-js',
        prevEl: '.btn-prev-js',
      },
      thumbs: {
        swiper: swiperDiscription,
      },
    });
  }
}
swiperComparison('.swiper-comparison-1-js', '.slider-discript-1-js');
swiperComparison('.swiper-comparison-2-js', '.slider-discript-2-js');

function brandSlider() {
  const swiper = new Swiper('.slider-brand-js', {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 10,
    freeMode: false,
    centeredSlides: false,
    allowTouchMove: true,
    breakpoints: {
      480: {
        slidesPerView: 3.2,
      },
    },
  });
}
brandSlider();
