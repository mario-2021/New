"use strict";

$(function () {
  'use strict';

  $('.toggle-sidebar').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
  $('.toggle-submenu').on('click', function () {
    $(this).find('.fa-angle-right').toggleClass('down');
    $(this).next('.child-links').slideToggle();
  });
  $('.toggle-fullscreen').on('click', function () {
    $(this).toggleClass("full-screen");

    if ($(this).hasClass("full-screen")) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  });
  $('.settingGear').on('click', function () {
    $(this).find(".settingIcons").toggleClass("fa-spin");
    $(this).parent().toggleClass('hide-setting');
  });
  var themesClasses = [];
  $(".colorOptions li").each(function () {
    themesClasses.push($(this).data("theme"));
  });
  $(".colorOptions li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"));
  });
  var fontClasses = [];
  $(".fontOptions select option").each(function () {
    fontClasses.push($(this).val());
  });
  $(".fontOptions select").on("change", function () {
    // console.log($(this).find("option:selected").val());
    $("body").removeClass(fontClasses.join(" ")).addClass($(this).find("option:selected").val());
  });
  var fontSizes = [];
  $(".sizeOption select option").each(function () {
    fontSizes.push($(this).val());
  });
  $(".sizeOption select").on("change", function () {
    // console.log($(this).find("option:selected").val());
    $("body").removeClass(fontSizes.join(" ")).addClass($(this).find("option:selected").val());
  });
});
var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}