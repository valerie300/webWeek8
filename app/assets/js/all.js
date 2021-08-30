(function () {
  "use strict";
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia("(max-width: 992px)");
  // keep track of swiper instances to destroy later
  let mySwiper;
  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1.5,
      spaceBetween: 30,
    });
  };
  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})(); /* IIFE end */

var usswiper = new Swiper(".swiper-body", {
  slidesPerView: 2,
  spaceBetween: 30,
});

//日期
$(function () {
  $("#datepicker").datepicker({
    dateFormat: "mm-dd-yy", //修改顯示順序
  });
});

//師資
var weswiper = new Swiper(".weSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// 課程推薦
var recommendSwiper = new Swiper(".Swiper-recommend", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});