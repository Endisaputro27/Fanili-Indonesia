// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});