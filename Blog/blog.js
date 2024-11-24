// Seleccionamos el botón "Leer más"
const readMoreBtn = document.querySelector('.read-more-btn')
const moreText = document.querySelector('.more-text')
const shortText = document.querySelector('.short-text')
const articleBtn = document.getElementById('article-btn')

moreText.style.display = 'none'
// Evento para el botón
readMoreBtn.addEventListener('click', function () {
  // Si el texto adicional está oculto, lo mostramos
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block'
    // shortText.style.display = 'none' // Opcional: Ocultamos el texto corto
    readMoreBtn.innerText = 'Leer menos' // Cambiamos el texto del botón
    articleBtn.style.display = 'inline' // Mostramos el botón de leer artículo
  } else {
    // Si el texto adicional está visible, lo ocultamos de nuevo
    moreText.style.display = 'none'
    shortText.style.display = 'block' // Mostramos el texto corto
    readMoreBtn.innerText = 'Leer más' // Volvemos a cambiar el texto del botón
    articleBtn.style.display = 'none' // Mostramos el botón de leer artículo
  }
})
