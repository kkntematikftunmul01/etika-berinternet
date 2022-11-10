$(function () {
  var scroll = new SmoothScroll('a[href*="#section-"]');
});

//parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // internet
  if (wScroll > 282) {
    $(".pengertian .pengertian-item").addClass("muncul");
  }

  if (wScroll > 1294) {
    $(".manfaat .manfaat-item").addClass("muncul");
  }

  if (wScroll > 2130) {
    $(".dampak .dampak-item").addClass("muncul");
  }

  // Tentang Kami
  if (wScroll > 92) {
    $(".tentang .mhs-item").addClass("muncul");
  }

  // Etika
  if (wScroll > 125) {
    $(".aturan .aturan-item").addClass("muncul");
  }

  if (wScroll > 1269) {
    $(".penting .penting-item").addClass("muncul");
  }
});

// FadeToggle
$(document).ready(function () {
  $("#pengertian-title").on("click", function () {
    $(".pengertian-item").fadeToggle(0.5);
  });
});

$(document).ready(function () {
  $("#manfaat-title").on("click", function () {
    $(".manfaat-item").fadeToggle(0.5);
  });
});

$(document).ready(function () {
  $("#dampak-title").on("click", function () {
    $(".dampak-item").fadeToggle(0.5);
  });
});
