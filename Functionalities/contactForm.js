// script.js
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form')

  // Obtener la configuración de EmailJS desde el backend
  fetch('http://localhost:3000/emailjs-config')
    .then((response) => response.json())
    .then((config) => {
      // Inicializar EmailJS con el userId
      emailjs.init(config.publicKey)

      // Escuchar el envío del formulario
      form.addEventListener('submit', (event) => {
        event.preventDefault() // Evitar recarga de la página

        // Capturar datos del formulario
        const formData = {
          form_name: document.getElementById('form_name').value,
          form_email: document.getElementById('form_email').value,
          message: document.getElementById('message').value,
        }

        // Enviar el correo usando EmailJS
        emailjs
          .send(config.serviceId, config.templateId, formData)
          .then((response) => {
            alert('Correo enviado exitosamente!')
            form.reset() // Limpiar el formulario
          })
          .catch((error) => {
            console.error('Error al enviar el correo:', error)
            alert('Hubo un problema al enviar el correo.')
          })
      })
    })
    .catch((error) => {
      console.error('Error al obtener la configuración de EmailJS:', error)
    })
})
