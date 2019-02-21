/* eslint-disable */
const $ = window.$;
const globalOptions = window.globalOptions;

export default function windowResize() {
  const breakpoints = [globalOptions.sizes.sm, globalOptions.sizes.lg];
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
