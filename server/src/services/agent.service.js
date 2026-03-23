const Startup = require("../models/Startup");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const AgentInsight = require("../models/AgentInsight");
const getCSOPrompt = require("../prompts/cso.prompt");
const getCMOPrompt = require("../prompts/cmo.prompt");
const getCFOPrompt = require("../prompts/cfo.prompt");
const { createChatCompletion } = require("./groq.service");
const parseJson = require("../utils/parseJson");

const getPromptByRole = (agentRole, startup) => {
  if (agentRole === "cso") {
    return getCSOPrompt(startup);
  }

  if (agentRole === "cmo") {
    return getCMOPrompt(startup);
  }

  if (agentRole === "cfo") {
    return getCFOPrompt(startup);
  }

  throw new Error(`Unsupported agent role: ${agentRole}`);
};

const chatWithAgent = async ({ startupId, agentRole, message }) => {
  const startup = await Startup.findById(startupId);

  if (!startup) {
    throw new Error("Startup not found.");
  }

  let conversation = await Conversation.findOne({
    startupId,
    agentRole,
  });

  if (!conversation) {
    conversation = await Conversation.create({
      startupId,
      agentRole,
    });
  }

  await Message.create({
    conversationId: conversation._id,
    role: "user",
    content: message,
  });

  const recentMessages = await Message.find({
    conversationId: conversation._id,
  })
    .sort({ createdAt: 1 })
    .limit(10);

  const systemPrompt = getPromptByRole(agentRole, startup);

  const groqMessages = [
    {
      role: "system",
      content: systemPrompt,
    },
    ...recentMessages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
  ];

  const rawReply = await createChatCompletion(groqMessages);
  const parsed = parseJson(rawReply);

  const responseText =
    parsed.response || "I analyzed your startup and have recommendations.";

  const dashboard = parsed.dashboard || {};

  await Message.create({
    conversationId: conversation._id,
    role: "assistant",
    content: responseText,
  });

  const savedInsight = await AgentInsight.findOneAndUpdate(
    {
      startupId,
      agentRole,
    },
    {
      startupId,
      agentRole,
      summary: dashboard.summary || "",
      topRecommendations: dashboard.topRecommendations || [],
      risks: dashboard.risks || [],
      nextActions: dashboard.nextActions || [],
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  );

  return {
    response: responseText,
    dashboard: {
      summary: savedInsight.summary,
      topRecommendations: savedInsight.topRecommendations,
      risks: savedInsight.risks,
      nextActions: savedInsight.nextActions,
    },
    conversationId: conversation._id,
  };
};

module.exports = {
  chatWithAgent,
};