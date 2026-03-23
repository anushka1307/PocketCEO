const AgentInsight = require("../models/AgentInsight");

const getDashboardInsights = async (req, res) => {
  try {
    const { startupId, agentRole } = req.params;

    const insight = await AgentInsight.findOne({
      startupId,
      agentRole,
    });

    if (!insight) {
      return res.status(404).json({
        message: "No dashboard insights found for this agent.",
      });
    }

    return res.status(200).json({
      startupId: insight.startupId,
      agentRole: insight.agentRole,
      summary: insight.summary,
      topRecommendations: insight.topRecommendations,
      risks: insight.risks,
      nextActions: insight.nextActions,
      updatedAt: insight.updatedAt,
    });
  } catch (error) {
    console.error("Get dashboard insights error:", error.message);

    return res.status(500).json({
      message: "Server error fetching dashboard insights.",
    });
  }
};

module.exports = {
  getDashboardInsights,
};