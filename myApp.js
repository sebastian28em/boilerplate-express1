let express = require('express');
let app = express();
// Ejercicio 5: servir JSON en /json
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

// Ejercicio: 4 servir activos estáticos desde la carpeta /public
app.use("/public", express.static(__dirname + "/public"));
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


































