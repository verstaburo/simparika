/* eslint-disable */
const $ = window.$;

export default function mytest() {
  $('.test .checkradio input').change(function () {
    const
      check = $(this),
      block = check.parents('.checkradio'),
      rightClass = 'checkradio_right',
      wrongClass = 'checkradio_wrong',
      section = check.parents('.test-item');

    section.find('.js-test-next').removeAttr('disabled');

    block.hasClass('is-right') ? block.addClass(rightClass) : block.addClass(wrongClass);
    section.find('.is-right').addClass(rightClass);
    block.parents('.test-item__options').addClass('is-disabled');
  });
};
/* eslint-enable */
