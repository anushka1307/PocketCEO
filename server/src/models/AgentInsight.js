const mongoose = require("mongoose");

const agentInsightSchema = new mongoose.Schema(
  {
    startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
    },
    agentRole: {
      type: String,
      enum: ["cso", "cmo", "cfo"],
      required: true,
    },
    summary: {
      type: String,
      default: "",
      trim: true,
    },
    topRecommendations: {
      type: [String],
      default: [],
    },
    risks: {
      type: [String],
      default: [],
    },
    nextActions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

agentInsightSchema.index({ startupId: 1, agentRole: 1 }, { unique: true });

module.exports = mongoose.model("AgentInsight", agentInsightSchema);