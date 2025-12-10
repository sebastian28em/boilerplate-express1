
// myApp.js
console.log("Hola mundo"); // Esto imprimirá "Hola mundo" en la consola

const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor corriendo');
});

// Inicia el servidor y mantiene el proceso activo
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});



































 module.exports = app;
