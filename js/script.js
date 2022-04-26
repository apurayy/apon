$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});
$('.screen_img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
$('.feadback_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".img_slider",
});

$('.img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    asNavFor: ".feadback_slider",
});

new VenoBox({
    selector: '.venobox'
});


// ======================sticky_menu_part_start======================
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('#main_menu').addClass('sticky')
  } else{
      $('#main_menu').removeClass('sticky')
  }
});

// (document).ready(function(){
//   $(window).scroll(function(){
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > 100) {
//         $('#main_menu').addClass('fadeOutLeft');
//         $('#main_menu').removeClass('fadeInLeft');
//         $('#main_menu').addClass('fadeInDown');
//         $('#main_menu').removeClass('fadeOutUp');
//         $('#main_menu').addClass('animated');      
//     } else {
//         $('#main_menu').addClass('fadeInLeft');
//         $('#main_menu').removeClass('fadeOutLeft');
//         $('#main_menu').addClass('fadeOutUp');
//         $('#main_menu').removeClass('fadeInUp');

//     }
//   });
// });
// ======================sticky_menu_part_end======================

// offer_part_start===================
$(".box_btn").click(function(){
  $(".box").addClass("box_remove")
})
// offer_part_end===================


// scroll part start=================
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
      $('.scroll_top').addClass('back_top')
  } else{
      $('.scroll_top').removeClass('back_top')
  }
});