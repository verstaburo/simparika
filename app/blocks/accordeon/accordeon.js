/* eslint-disable */
const $ = window.$;

export default function accordeon () {
  $.fn.accordeonOpen = function () {
    const
      block = this;

    block.find('.js-accordeon-head').addClass('is-active');
    block.find('.js-accordeon-content').slideDown(500);
  };

  $.fn.accordeonClose = function () {
    const
      block = this;

    block.find('.js-accordeon-head').removeClass('is-active');
    block.find('.js-accordeon-content').slideUp(500);
  };

  $('.js-accordeon-head').click(function () {
    const
      isOpened = $(this).hasClass('is-active'),
      block = $(this).parents('.accordeon');

    isOpened ? block.accordeonClose() : block.accordeonOpen();
  });
};
/* eslint-enable */
