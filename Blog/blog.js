// Seleccionamos el botón "Leer más"
const readMoreBtn = document.querySelectorAll('.read-more-btn')
const shortText = document.querySelector('.short-text')

// moreText.style.display = 'none'

document.addEventListener('DOMContentLoaded', () => {
  readMoreBtn.forEach((btn) => {
    // Evento para el botón
    btn.addEventListener('click', () => {
      const post = btn.closest('.post')

      // Encuentra el texto oculto y el botón "Ir al artículo" dentro de esta card
      const moreText = post.querySelector('.more-text')
      const articleBtn = post.querySelector('#article-btn')

      // Si el texto adicional está oculto, lo mostramos
      if (moreText.style.display === 'none' || !moreText.style.display) {
        moreText.style.display = 'block'

        btn.innerText = 'Leer menos' // Cambiamos el texto del botón
        articleBtn.style.display = 'inline' // Mostramos el botón de leer artículo
      } else {
        // Si el texto adicional está visible, lo ocultamos de nuevo
        moreText.style.display = 'none'
        shortText.style.display = 'block' // Mostramos el texto corto
        btn.innerText = 'Leer más' // Volvemos a cambiar el texto del botón
        articleBtn.style.display = 'none' // Mostramos el botón de leer artículo
      }
    })
  })
})
