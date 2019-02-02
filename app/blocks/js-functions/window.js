/* eslint-disable */
const $ = window.$;

export default function windowResize() {
  const breakpoints = [768, 1440];
  const breakpointsName = ['mobile', 'tablet', 'desktop'];

  function checkbp() {
    let ww = $(window).width();
    let returnVal = breakpointsName[0];

    for (var i = 0; i < breakpoints.length; i++) {
      if (ww >= breakpoints[i]) returnVal = breakpointsName[i+1];
    }

    return returnVal;
  }

  let breakpointLoaded = checkbp();
  let breakpointCurrent;

  $(window).resize(function () {
    breakpointCurrent = checkbp();
    if (breakpointLoaded != breakpointCurrent) location.reload();
  });
}
/* eslint-enable */
