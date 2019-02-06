/* eslint-disable */
const $ = window.$;

export default function mytest() {
  $('.test .checkradio input').change(function () {
    $(this).parents('.test-item').find('.js-test-next').removeAttr('disabled');
  });
};
/* eslint-enable */
