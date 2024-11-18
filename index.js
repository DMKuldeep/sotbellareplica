// function toggleHeart(element) {
//     element.classList.toggle('active');
//   }
  
  
// $(document).ready(function () {
//   $('.owl-carousel').owlCarousel({
//     loop: true,                   // Enable looping (infinite scroll)
//     margin: 10,                   // Space between images
//     nav: true,                    // Enable navigation arrows
//     dots: true,                   // Enable dots for navigation
//     autoplay: true,               // Auto slide
//     autoplayTimeout: 3000,        // Slide every 3 seconds
//     autoplayHoverPause: true,     // Pause on hover
//     responsive: {
//       0: {
//         items: 1,                 // Show 1 image on small screens
//       },
//       768: {
//         items: 2.5,               // Show 2.5 images on medium screens
//       },
//       1024: {
//         items: 2.5,               // Show 2.5 images on large screens
//       }
//     }
//   });
// });


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // 1 image for very small screens
      },
      768: {
        items: 2.5, // 2.5 images for medium screens
      },
      1024: {
        items: 2.5, // 2.5 images for larger screens
      }
    }
  });
});


