import { audioVideo } from './Functionalities/audioVideo.js'

// FUNCIONALIDADES NAVBAR

let navbar = document.querySelector('nav')

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = 'transparent'
  } else {
    navbar.style.background = '#9cb8a2fe'
  }
}

let burguerIcon = document.querySelector('.menu-icon')
let navLinks = document.querySelector('.nav-list')

function toggleMenu() {
  burguerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu')
  })
}
toggleMenu()
audioVideo()
