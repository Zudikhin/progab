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

    $('.catalog_block_item').each(function(num, elem) {
      elem = $(elem).find(".catalog_block_item_slider_wrap");
      elem.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        prevArrow: $(this).find(".catalog_block_item_slider_prev"),
        nextArrow: $(this).find(".catalog_block_item_slider_next")
      });
    });

    $('.product_block_left_slider_for_wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: true,
      prevArrow: $('.product_block_left_slider_for_prev'),
      nextArrow: $('.product_block_left_slider_for_next'),
      asNavFor: '.product_block_left_slider_nav'
    });

    $('.product_block_left_slider_nav').slick({
      slidesToShow: 3,
      slideToScroll: 1,
      arrows: false,
      asNavFor: '.product_block_left_slider_for_wrap',
      dots: false,
      focusOnSelect: true
    });



});