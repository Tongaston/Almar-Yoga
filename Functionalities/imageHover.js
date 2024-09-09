const images = document.getElementsByClassName('images')
let activeImage = document.querySelector('.hovered')

export function imageHover() {
  const imagesArray = Array.prototype.slice.call(images)

  imagesArray.forEach((image) => {
    image.addEventListener('mouseenter', () => {
      if (activeImage) {
        activeImage.classList.remove('hovered')
      }
      image.classList.add('hovered')
      activeImage = image
    })
  })
}
