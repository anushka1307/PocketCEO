const express = require("express");
const {
  createStartup,
  getStartupById,
  updateStartup,
} = require("../controllers/startup.controller");

const router = express.Router();

router.post("/", createStartup);
router.get("/:id", getStartupById);
router.patch("/:id", updateStartup);

module.exports = router;