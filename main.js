$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $(".header").addClass("fixed");
      $(".nav1-container").addClass("hidden");
    } else {
      $(".nav1-container").removeClass("hidden");
      $(".header").removeClass("fixed");
    }
  });

  $("#search-btn").click(function () {
    $(".sub-section").toggleClass("hidden");
  });
  $(".close-btn").click(function () {
    $(".sub-section").toggleClass("hidden");
  });

  $(".toggle").click(function () {
    $(".mob-nav").toggleClass("hidden");
  });
  $(".toggle-close").click(function () {
    $(".mob-nav").toggleClass("hidden");
  });
});
