$(document).ready(function(){
  $('.team-carousel').slick({
     prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
     nextArrow: '<i class="fas fa-angle-right right-arrow"></i>',
  });
});


// anchor jquery below

$(document).ready(function() {
  $(".anchor-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });
});