const express = require("express");
const Users = require("./users");

const userMicroServ = new Users();

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await userMicroServ.geALL();
  return res.json(users);
});
router.get("/", async (req, res) => {
  const users = await userMicroServ.getByEmail(req.body.email);
  return res.json(users);
});
router.post("/", async (req, res) => {
  const users = await userMicroServ.create(req.body);
  return res.json(users);
});
router.put("/:id", async (req, res) => {
  const users = await userMicroServ.update(req.params.id,req.body);
  return res.json(users);
});
router.delete("/:id", async (req, res) => {
  const users = await userMicroServ.delete(req.params.id,req.body);
  return res.json(users);
});

module.exports = router;
