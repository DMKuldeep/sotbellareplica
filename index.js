// function toggleHeart(element) {
//     element.classList.toggle('active');
//   }
  


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, 
      },
      768: {
        items: 2.5, 
      },
      1024: {
        items: 2.5, 
      }
    }
  });
});



const videoContainers = document.querySelectorAll('.image-container');

videoContainers.forEach(container => {
  const video = container.querySelector('video');

  container.addEventListener('mouseenter', () => {
    video.style.display = 'block';
    video.play();
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    video.style.display = 'none';
  });
});



const promoText = document.getElementById("promoText");

// Define the two text options
const text1 = "10% OFF on orders over ₹5,000 | Code: DIWALI10";
const text2 = "20% OFF on orders over ₹10,000 | Code: DIWALI10";

// Toggle function
let toggle = true;
setInterval(() => {
  promoText.textContent = toggle ? text2 : text1;
  toggle = !toggle;
}, 5000);



// function updateOffer() {
//   const topTextElement = document.getElementById('toptext');
//   topTextElement.textContent = "20% OFF on orders over ₹10,000 | Code: DIWALI10";
// }

setTimeout(() => {
  const topTextElement = document.getElementById('toptext');
  topTextElement.textContent = "20% OFF on orders over ₹10,000 | Code: DIWALI10";
}, 2000); 

document.getElementById('heart-container').addEventListener('click', function () {
  const whiteHeart = document.getElementById('white-heart');
  const blackHeart = document.getElementById('black-heart');

  if (whiteHeart.style.display === 'block') {
    whiteHeart.style.display = 'none'; // Hide white heart
    blackHeart.style.display = 'block'; // Show black heart
  } else {
    whiteHeart.style.display = 'block'; // Show white heart
    blackHeart.style.display = 'none'; // Hide black heart
  }
});





