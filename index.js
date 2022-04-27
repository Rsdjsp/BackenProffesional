const express = require("express");

const app = express();

const songs = require("./routes/songs");

songs(app);

app.get("/", (req, res) => {
  return res.json({ hola: "mundo" });
});

app.listen(4000, () => {
  console.log("Listening on port : http://localhost:4000");
});
