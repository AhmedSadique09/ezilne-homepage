const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchIcon = document.getElementById('searchIcon');
const searchBarContainer = document.getElementById('searchBarContainer');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// If on mobile, show the search bar below the "16th Anniversary" menu item when search icon is clicked
searchIcon.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    searchBarContainer.style.display = 'block';
  }
});
