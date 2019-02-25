/* eslint-disable */
const $ = window.$;
const globalOptions = window.globalOptions;

export default function parallax() {
  $('.js-parallax').each(function (i) {
    const
      block = $(this),
      parent = block.parents(),
      w = $(window);

    let blockH, parentH, maxTransform, parentTop, wH;

    w.on('load resize', function () {
      blockH = block.outerHeight();
      parentH = parent.outerHeight();
      maxTransform = blockH - parentH;
      parentTop = parent.offset().top;
      wH = w.height();
    });

    w.on('load scroll resize', function () {
      const
        sT = w.scrollTop();

      let percent = 0;

      if (sT < parentTop - w.height()) {

        // Не дошли до блока
        block.css({
          transform: 'translate3d(-50%, 0, 0)',
        });

      } else if (sT >= (parentTop - wH) && sT <= (parentTop + wH)) {

        // Блок видим
        percent = (sT - (parentTop - wH)) / (wH + parentH);
        percent = percent > 1 ? 1 : percent;
        block.css({
          transform: `translate3d(-50%, -${maxTransform * percent}px, 0)`,
        });

      } else if (sT > parentTop + wH) {

        // Блок проскроллен
        block.css({
          transform: `translate3d(-50%, -${maxTransform}px, 0)`,
        });

      }
    });
  });
}
/* eslint-enable */
