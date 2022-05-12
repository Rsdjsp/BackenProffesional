const express = require("express");
const PlaylistService = require("../services/playlist");
const auth = require("../middleware/auth");

function playlist(app) {
  const router = express.Router();
  app.use("/api/playlist", router);
  const playlistServ = new PlaylistService();

  router.post("/create", auth, async (req, res) => {
    const { name } = req.body;
    const { id } = req.user;
    const playlist =  await playlistServ.create(name, id);
    return res.json(playlist);
  });
}

module.exports = playlist;
