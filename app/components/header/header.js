/* eslint-disable */
const $ = window.$;

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

import stick_in_parent from 'sticky-kit/dist/sticky-kit';

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

  // Закрепление шапки при скролле
  function fixHeader () {
    const header = $('.header');
    const spirit = $(document).find('.header-spirit');

    header.addClass('is-fixed');

    if (spirit.length < 1) {
      $('<div></div>').css({
        height: header.outerHeight(),
        width: '100%',
        display: 'block',
        pointerEvents: 'none',
      }).addClass('header-spirit').insertAfter(header);
    } else {
      spirit.show();
    }
  }

  fixHeader();

  // Закрепление плашки при скролле
  const footer = $('.footer__top');

  function fixPanel () {
    const spirit = $(document).find('.footer-spirit');

    footer.addClass('is-fixed');

    if (spirit.length < 1) {
      $('<div></div>').css({
        height: footer.outerHeight(),
        width: '100%',
        display: 'block',
        pointerEvents: 'none',
      }).addClass('footer-spirit').insertAfter(footer);
    } else {
      spirit.show();
    }

    $(window).resize(function () {
      spirit.height(footer.outerHeight());
    });
  }

  function unfixPanel () {
    const spirit = $(document).find('.footer-spirit');

    footer.removeClass('is-fixed');
    spirit.hide();
  }

  function navigation() {
    $(window).on('load scroll', function () {
      const
        w = $(this),
        footerTop = $('.footer__top'),
        footerSpirit = $('.footer-spirit');

      const footer = footerTop.hasClass('is-fixed') ? footerSpirit : footerTop;

      if (w.scrollTop() < footer.position('body').top - w.height() + footer.outerHeight()) {
        fixPanel();
      } else {
        unfixPanel();
      }
    });
  }

  navigation();
};
/* eslint-enable */
