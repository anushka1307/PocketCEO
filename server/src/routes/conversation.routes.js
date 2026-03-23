const express = require("express");
const {
  getConversationByStartupAndRole,
} = require("../controllers/conversation.controller");

const router = express.Router();

router.get("/:startupId/:agentRole", getConversationByStartupAndRole);

module.exports = router;