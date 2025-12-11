require('dotenv').config();
let express = require('express');
let app = express();

//  ejercicio 7 Middleware de registrador de solicitudes
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
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

module.exports = app;


































