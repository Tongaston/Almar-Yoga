function sendMail() {
  let params = {
    from_name: document.getElementById('from_name').value,
    from_email: document.getElementById('from_email').value,
    message: document.getElementById('message').value,
  }

  emailjs.send('service_t6oxaez', 'template_sgins5e', params).then(
    function () {
      alert('Consulta enviada correctamente')
    },
    function (error) {
      alert('Error al enviar su email. Error: ' + error)
    }
  )
}
