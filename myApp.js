let express = require('express');
let app = express();

// Ejercicio 1: "Hello World" en la consola
console.log("Hello World");

// Ejercicio 2: servir "Hello Express" en la raíz
app.get("/", function(req, res) {
 const absolutePath=__dirname + "/views/index.html";
 res.sendFile(absolutePath);
});

// Ruta JSON
app.get("/json", function(req, res) {
  res.json({
    message: "Hello World"
  });
});

// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;




































