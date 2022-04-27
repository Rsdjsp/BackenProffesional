const express = require("express");
const SongsService = require("../services/songs");

function songs(app) {
  const router = express.Router();
  const songService = new SongsService();
  app.use("/songs", router);

  router.get("/", (req, res) => {
    const songs = songService.getAll();
    return res.json(songs);
  });
}

module.exports = songs;
