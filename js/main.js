$(document).ready(function() {
    "use strict";

    $(".header_block_right_btn").click(function() {
      $("body").addClass("scroll");
      $(".back_modal").addClass("active");
      $(".dropdown").addClass("active");
    });

    $(".back_modal").click(function() {
      $(this).removeClass("active");
      $(".dropdown").removeClass("active");
      $("body").removeClass("scroll");
    });

    $(".dropdown_top_btn").click(function() {
      $(".back_modal").removeClass("active");
      $(".dropdown").removeClass("active");
      $("body").removeClass("scroll");
    });

    $('.best_block_item').each(function(num, elem) {
      elem = $(elem).find(".best_block_item_slider_wrap");
      elem.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        prevArrow: $(this).find(".best_block_item_slider_prev"),
        nextArrow: $(this).find(".best_block_item_slider_next")
      });
    });



});