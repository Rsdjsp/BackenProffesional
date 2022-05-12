const express = require("express");
const port = 4000;
const app = express();
const cookie = require("cookie-parser");

app.use(express.json());
app.use(cookie());

//Importando routers
const songs = require("./routes/songs");
const auth = require("./routes/auth");
const playlist = require("./routes/playlist");

songs(app);
auth(app);
playlist(app)

app.get("/", (req, res) => {
  return res.json({
    hola: "mundo",
  });
});

app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});
