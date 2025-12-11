require('dotenv').config();
let express = require('express');
let app = express();
// Endpoint GET /name usando parámetros de consulta
app.get('/name', (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

//  ejercicio 7 Middleware de registrador de solicitudes
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// ejercicio 9 Ruta de eco usando parámetro de ruta
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/json', (req, res) => {
  let message = 'Hello json';
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

//ejercicio 8 Middleware encadenado para /now
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

module.exports = app;


































