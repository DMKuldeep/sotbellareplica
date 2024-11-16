function toggleHeart(element) {
    element.classList.toggle('active');
  }
  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,                    // Show 3 images at a time
      loop: true,                  // Infinite loop
      margin: 15,                  // Space between items
      autoplay: true,              // Auto slide
      autoplayTimeout: 3000,       // 3 seconds per slide
      autoplayHoverPause: true,    // Pause on hover
      nav: true,                   // Show next/prev navigation
      dots: false,                 // Hide dots navigation
      responsive: {                // Adjust for different screen sizes
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });