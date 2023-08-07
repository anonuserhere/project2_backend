const express = require("express");
const router = express.Router();
const { readAll } = require("../controllers/entry_controller");

router.get("/", readAll);

module.exports = {
  router,
};
