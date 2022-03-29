const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola soy el alumno luis rojas')
})

app.listen(3000)