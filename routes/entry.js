const express = require("express");
const router = express.Router();
const {
  readAll,
  create,
  getOne,
  updateOne,
  deleteOne,
} = require("../controllers/entry_controller");

router.get("/", readAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = {
  router,
};
