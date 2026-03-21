const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    problem: {
      type: String,
      required: true,
      trim: true,
    },
    targetCustomer: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      default: "",
      trim: true,
    },
    businessModel: {
      type: String,
      default: "",
      trim: true,
    },
    stage: {
      type: String,
      enum: ["idea", "mvp", "launched", "growth"],
      default: "idea",
    },
    budget: {
      type: String,
      default: "",
      trim: true,
    },
    goals: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Startup", startupSchema);