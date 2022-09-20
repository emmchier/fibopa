// Materialize
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// cierro sidenav al clickear un ítem del menú
$(".sidenav li a").click(function() {
    $('.sidenav').sidenav('close');
});

 // dots navigation
  easyScrollDots({
    'fixedNav': false,
    'fixedNavId': '',
    'fixedNavUpward': false
  });

// Responsive Slides
$(function() {
  $(".rslides").responsiveSlides();
});

// TOP-ARROW - Flecha que sube al top de inicio.

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > 700){
          $('#scroll').fadeIn();
          $('#brand').addClass('show');
          $('#brand').addClass('dark');
          $('#brand-bis').addClass('show');
          $('#brand-bis').addClass('dark');
          $('.sidenav-trigger').addClass('dark');
          $('#toggle').addClass('dark');
          $('.arrow').addClass('show');
          $('.arrow').addClass('dark');
          $('#toggle-res').addClass('dark');
          $('.toogle-res-icon').addClass('dark');
          $('#btn-bio').addClass('dark');
          $('#btn-bio-res').addClass('dark');
          $('.nav-main').removeClass('transparent');
          $('.nav-main').addClass('no-shadow');
        } else {
          $('#scroll').fadeOut();
          $('#brand').removeClass('show');
          $('#brand').removeClass('dark');
          $('#brand-bis').removeClass('show');
          $('#brand-bis').removeClass('dark');
          $('.sidenav-trigger').removeClass('dark');
          $('#toggle').removeClass('dark');
          $('#toggle-res').removeClass('dark');
          $('.arrow').removeClass('show');
          $('.arrow').removeClass('dark');
          $('.toogle-res-icon').removeClass('dark');
          $('#btn-bio').removeClass('dark');
          $('#btn-bio-res').removeClass('dark');
          $('.nav-main').addClass('transparent');
          $('.nav-bis').removeClass('no-shadow');
        }
      });
      $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
      $('#brand').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
    });

// Menú Form

$("#toggle").click(function() {
  $(this).toggleClass('on');
  $("#menu-form").addClass("active");
  $("#menu-form").addClass("full-elevation");
  $(".close-btn").addClass("full-elevation");
  $("body").addClass("not-scroll");
  $("nav").addClass("ocult");
  $(".mensaje").addClass("scroll-on");
});
$("#toggle-res").click(function() {
  $(this).toggleClass('on');
  $("#menu-form").addClass("active");
  $("#menu-form").addClass("full-elevation");
  $(".close-btn").addClass("full-elevation");
  $("body").addClass("not-scroll");
  $("nav").addClass("ocult");
});
$(".close-btn").click(function(e) {
  $("#menu-form").removeClass("active");
  $("#menu-form").removeClass("full-elevation");
  $(".close-btn").removeClass("full-elevation");
  $("body").removeClass("not-scroll");
  $("nav").removeClass("ocult");
  $(this).toggleClass('off');
});
$("#toggle-gracias").click(function(e) {
  $(this).toggleClass('on');
  $("#menu-form").addClass("active");
  $("#menu-form").addClass("full-elevation");
  $(".close-btn").addClass("full-elevation");
  $("body").addClass("not-scroll");
  $("nav").addClass("ocult");
  $(".mensaje").addClass("scroll-on");
});



