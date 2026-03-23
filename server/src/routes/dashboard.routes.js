const express = require("express");
const {
  getDashboardInsights,
} = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/:startupId/:agentRole", getDashboardInsights);

module.exports = router;