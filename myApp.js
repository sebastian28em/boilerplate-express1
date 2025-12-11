require('dotenv').config();
let express = require('express');
let app = express();

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


































