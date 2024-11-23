const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchIcon = document.getElementById('searchIcon');
const searchBarContainer = document.getElementById('searchBarContainer');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


searchIcon.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    searchBarContainer.style.display = 'block';
  }
});

// Slider JS Start Here

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-track img');
  const totalSlides = slides.length;

  currentIndex += direction;

  // Loop through the slides
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Go to last slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Go to first slide
  }

  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(() => {
  moveSlide(1); 
}, 5000); 
