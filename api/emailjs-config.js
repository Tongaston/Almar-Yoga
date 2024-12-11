// server.js
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

require('dotenv').config()
app.use(cors())

// Servir archivos estáticos desde la carpeta "Almar-Yoga"
app.use(express.static('Almar-Yoga'))

// Endpoint para enviar las claves al cliente
export default function handler(req, res) {
  res.json({
    publicKey: process.env.PUBLIC_KEY,
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
  })
}

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
