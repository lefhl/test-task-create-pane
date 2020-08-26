"use strict";

$(document).ready(function () {
  $('.accordion-item__trigger').click(function () {
    $(this).next('.accordion-item__content').slideToggle();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    var arrow = $(this).find('.accordion-item__arrow');

    if (arrow.hasClass('active')) {
      arrow.removeClass('active');
      arrow.attr('src', 'img/arrow-down.png');
      $(this).find('.accordion-item__close').removeClass('active');
    } else {
      arrow.addClass('active');
      $(this).find('.accordion-item__arrow').attr('src', 'img/arrow-up.png');
      $(this).find('.accordion-item__close').addClass('active');
    }
  });
  $('.label-for-switcher').click(function () {
    $(this).siblings().toggleClass('active');
  });
  var counters = $('.accordion-item__tile-count');
  $.each(counters, function (i, counter) {
    $(counter).click(function (e) {
      var count = +$(this).find('.tile-count-input').val();

      if ($(e.target).hasClass('tile-count__less') && count > 0) {
        count -= 1;
      }

      if ($(e.target).hasClass('tile-count__more')) {
        count += 1;
      }

      $(this).find('.tile-count-input').val(count);
      console.log(count);
    });
  });
});