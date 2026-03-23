const { chatWithAgent } = require("../services/agent.service");

const postChatMessage = async (req, res) => {
  try {
    const { startupId, agentRole, message } = req.body;

    if (!startupId || !agentRole || !message) {
      return res.status(400).json({
        message: "startupId, agentRole, and message are required.",
      });
    }

    const result = await chatWithAgent({
      startupId,
      agentRole,
      message,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Chat error:", error.message);

    if (error.message === "Startup not found.") {
      return res.status(404).json({ message: error.message });
    }

    return res.status(500).json({
      message: "Server error processing chat.",
      error: error.message,
    });
  }
};

module.exports = {
  postChatMessage,
};