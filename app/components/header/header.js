/* eslint-disable */
const $ = window.$;

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export default function heading () {
  const head = $('.header__nav');
  const button = $('.js-burger-button');

  button.on('click', function () {
    $(this).toggleClass('is-active');

    if (!head.hasClass('is-active')) {
      head.show(0, function () {
        $(this).css({display: 'flex'}).addClass('is-active');
      }).addClass('is-active');

      freeze();
    } else {
      head.removeClass('is-active');

      setTimeout(function () {
        head.hide();
      }, 300);

      unfreeze();
    }
  });

  $(window).resize(function () {
    if ($(this).width() >= 768) {
      unfreeze();
    }
  });
};
/* eslint-enable */
