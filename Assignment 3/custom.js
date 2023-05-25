$(document).ready(function() {
  // Activate Carousel
  $('#carouselExampleIndicators').carousel();
  
  // Enable Carousel Indicators
  $('.carousel-indicators li').click(function() {
      $('.carousel-indicators li').removeClass('active');
      $(this).addClass('active');
  });
  
  // Enable Carousel Controls
  $('.carousel-control-prev').click(function() {
      $('#carouselExampleIndicators').carousel('prev');
  });
  
  $('.carousel-control-next').click(function() {
      $('#carouselExampleIndicators').carousel('next');
  });
});
    

