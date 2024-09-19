// Seleccionamos el botón "Leer más"
const readMoreBtn = document.querySelector('.read-more-btn')
const moreText = document.querySelector('.more-text')
const shortText = document.querySelector('.short-text')

// Evento para el botón
readMoreBtn.addEventListener('click', function () {
  // Si el texto adicional está oculto, lo mostramos
  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline'
    shortText.style.display = 'none' // Opcional: Ocultamos el texto corto
    readMoreBtn.innerText = 'Leer menos' // Cambiamos el texto del botón
  } else {
    // Si el texto adicional está visible, lo ocultamos de nuevo
    moreText.style.display = 'none'
    shortText.style.display = 'inline' // Mostramos el texto corto
    readMoreBtn.innerText = 'Leer más' // Volvemos a cambiar el texto del botón
  }
})
