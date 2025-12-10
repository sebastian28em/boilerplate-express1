let express = require('express');
let app = express();
// Ejercicio: 3 servir el archivo index.html en la ruta raíz
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
// Ejercicio: 2 servir la cadena en la ruta raíz
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Ejercicio: 1 "Hello World"
console.log("Hello World");
app.get("/json", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

module.exports = app;


































 module.exports = app;
