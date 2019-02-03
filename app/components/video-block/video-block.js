/* eslint-disable */
const $ = window.$;

export default function videoBlock () {
  const
    buttonClass = '.js-video-button',
    videoClass = '.js-video',
    elemClass = '.js-video-hide';

  $(buttonClass).click(function () {
    const
      button = $(this),
      section = button.parents('.video-block'),
      video = section.find(videoClass),
      elems = section.find(elemClass);

    if (!video.hasClass('is-playing')) {

      button.addClass('is-active');
      video.addClass('is-playing')[0].play();
      elems.addClass('is-hidden');

    } else {

      button.removeClass('is-active');
      video.removeClass('is-playing')[0].pause();
      elems.removeClass('is-hidden');

    }
  });

  $(videoClass).each(function () {
    const
      video = $(this),
      section = video.parents('.video-block'),
      button = section.find(buttonClass),
      elems = section.find(elemClass),
      w = $(window);

    video[0].onended = function () {
      button.removeClass('is-active');
      video.removeClass('is-playing');
      elems.removeClass('is-hidden');
      video[0].currentTime = 0;
    };

    w.on('scroll', function () {
      const
        sT = $(this).scrollTop(),
        posTop = section.position('html').top;

      if (sT > posTop + section.outerHeight() || sT < posTop - w.height()) {
        if (video.hasClass('is-playing')) button[0].click();
      }
    });
  });
};
/* eslint-enable */
