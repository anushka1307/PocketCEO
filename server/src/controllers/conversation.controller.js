const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const getConversationByStartupAndRole = async (req, res) => {
  try {
    const { startupId, agentRole } = req.params;

    const conversation = await Conversation.findOne({
      startupId,
      agentRole,
    });

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found.",
      });
    }

    const messages = await Message.find({
      conversationId: conversation._id,
    }).sort({ createdAt: 1 });

    return res.status(200).json({
      conversationId: conversation._id,
      startupId: conversation.startupId,
      agentRole: conversation.agentRole,
      messages,
    });
  } catch (error) {
    console.error("Get conversation error:", error.message);

    return res.status(500).json({
      message: "Server error fetching conversation.",
    });
  }
};

module.exports = {
  getConversationByStartupAndRole,
};