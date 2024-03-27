let navbar = document.querySelector('nav');

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = '#9cb8a2fe';
  } else {
    navbar.style.background = 'transparent';
  }
};
