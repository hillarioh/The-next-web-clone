$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $(".header").addClass("fixed");
      $(".nav1-container").addClass("hidden");
    } else {
      $(".nav1-container").removeClass("fixed");
      $(".header").removeClass("fixed");
    }
  });
});
