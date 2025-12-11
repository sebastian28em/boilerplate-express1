let express = require('express');
let app = express();
const path = require('path');

// Ejercicio 1: "Hello World" en la consola
console.log("Hello World");

// Ejercicio 2: servir una cadena en otra ruta
app.get("/hello", (req, res) => {
  res.send("Hello Express");
});

// Ejercicio 3: servir el archivo index.html en la ruta raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Ruta JSON
app.get("/json", (req, res) => {
  res.json({ message: "Hello World" });
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

// Obligatorio para FCC
module.exports = app;



































