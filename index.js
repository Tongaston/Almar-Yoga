import { audioVideo } from './Functionalities/audioVideo.js'
import { imageHover } from './Functionalities/imageHover.js'

// FUNCIONALIDADES NAVBAR

let navbar = document.querySelector('nav')

let element = document.body
element.scrollIntoView({ behavior: 'smooth' })

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

// FUNCIONALIDADES VIDEO MUTED
audioVideo()
// FUNCIONALIDADES SLIDER
imageHover()
