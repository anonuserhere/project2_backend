const express = require("express");
const router = express.Router();
const { readAll } = require("../controllers/entry_controller");

router.get("/", async (req, res) => {
  try {
    await readAll(req.db, req, res);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = {
  router,
};
