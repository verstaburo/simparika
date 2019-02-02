/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;
const globalOptions = window.globalOptions;

export default function slider() {
  const
    w = $(window),
    dotsClass = '.dots';

  // Слайдер преимуществ
  $('.js-advantages-slider').each(function () {
    if (w.width() >= globalOptions.sizes.sm) return;

    const slider = new Swiper($(this), {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 18,
      simulateTouch: false,
      pagination: {
        el: $(this).find(dotsClass),
        clickable: true,
        paginationClickableClass: 'advantages-slider__dots_clickable',
        bulletClass: 'dots__dot',
        bulletActiveClass: 'is-active',
      },
      roundLengths: true,
    });
  });

  // Слайдер статей
  $('.js-articles-slider').each(function () {
    if (w.width() >= globalOptions.sizes.lg) return;

    const slider = new Swiper($(this), {
      speed: 700,
      slidesPerView: 2,
      spaceBetween: 24,
      pagination: {
        el: $(this).find(dotsClass),
        clickable: true,
        paginationClickableClass: 'advantages-slider__dots_clickable',
        bulletClass: 'dots__dot',
        bulletActiveClass: 'is-active',
      },
      simulateTouch: false,
      roundLengths: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
      },
    });
  });

  // Слайдер вопросов и ответов
  $('.js-faq-slider').each(function () {
    if (w.width() >= globalOptions.sizes.lg) return;

    const slider = new Swiper($(this), {
      speed: 700,
      slidesPerView: 'auto',
      spaceBetween: 24,
      pagination: {
        el: $(this).find(dotsClass),
        clickable: true,
        paginationClickableClass: 'advantages-slider__dots_clickable',
        bulletClass: 'dots__dot',
        bulletActiveClass: 'is-active',
      },
      simulateTouch: false,
      roundLengths: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
      },
    });
  });
}
/* eslint-enable */
