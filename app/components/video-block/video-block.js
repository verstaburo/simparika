/* eslint-disable */
const $ = window.$;

export default function videoBlock () {
  const
    sectionClass = '.video-block',
    buttonClass = '.js-video-button',
    videoClass = '.js-video',
    elemClass = '.js-video-hide',
    posterClass = '.js-video-poster',
    w = $(window);

  let defaultHeight;

  $(buttonClass).click(function () {
    const
      button = $(this),
      section = button.parents(sectionClass),
      video = section.find(videoClass),
      elems = section.find(elemClass),
      poster = section.find(posterClass);

    if (!video.hasClass('is-playing')) {

      defaultHeight = section.height();
      button.addClass('is-active');
      poster.addClass('is-active');
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
      poster = section.find(posterClass);

    video[0].onended = function () {
      button.removeClass('is-active');
      video.removeClass('is-playing');
      elems.removeClass('is-hidden');
      poster.removeClass('is-active');
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
