let navbar = document.querySelector('nav');

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = '#9cb8a2fe';
  } else {
    navbar.style.background = 'transparent';
  }
};

let burguerIcon = document.querySelector('.burguer-icon');
let navLinks = document.querySelector('.nav-list');

function toggleMenu() {
  navLinks.classList.toggle('show-menu');
}
