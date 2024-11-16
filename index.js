// function toggleHeart(element) {
//     element.classList.toggle('active');
//   }
  
  
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,                // Show 3 items (but with one partially visible)
    loop: true,              // Infinite loop
    margin: 20,              // Adjust spacing between items
    autoplay: true,          // Enable autoplay
    autoplayTimeout: 3000,   // Autoplay speed (3 seconds)
    autoplayHoverPause: true,// Pause on hover
    nav: true,               // Show next/prev arrows
    dots: true,              // Enable dots
    responsive: {
      0: {
        items: 1,            // Show 1 item on small screens
        margin: 10
      },
      768: {
        items: 2,            // Show 2 items on medium screens
        margin: 15
      },
      1200: {
        items: 3             // Show 3 items on large screens
      }
    }
  });
});
