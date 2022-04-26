const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    nombre: "robert",
  });
});

app.listen(4000, () => {
  console.log("Escudhando en http://localhost:4000");
});




