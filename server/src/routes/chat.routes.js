const express = require("express");
const { postChatMessage } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/", postChatMessage);

module.exports = router;