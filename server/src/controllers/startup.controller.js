const Startup = require("../models/Startup");

const createStartup = async (req, res) => {
  try {
    const {
      userId,
      name,
      problem,
      targetCustomer,
      industry,
      businessModel,
      stage,
      budget,
      goals,
    } = req.body;

    if (!userId || !name || !problem || !targetCustomer) {
      return res.status(400).json({
        message: "userId, name, problem, and targetCustomer are required.",
      });
    }

    const startup = await Startup.create({
      userId,
      name,
      problem,
      targetCustomer,
      industry,
      businessModel,
      stage,
      budget,
      goals,
    });

    return res.status(201).json(startup);
  } catch (error) {
    console.error("Create startup error:", error.message);
    return res.status(500).json({ message: "Server error creating startup." });
  }
};

const getStartupById = async (req, res) => {
  try {
    const { id } = req.params;

    const startup = await Startup.findById(id);

    if (!startup) {
      return res.status(404).json({ message: "Startup not found." });
    }

    return res.status(200).json(startup);
  } catch (error) {
    console.error("Get startup error:", error.message);
    return res.status(500).json({ message: "Server error fetching startup." });
  }
};

const updateStartup = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStartup = await Startup.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedStartup) {
      return res.status(404).json({ message: "Startup not found." });
    }

    return res.status(200).json(updatedStartup);
  } catch (error) {
    console.error("Update startup error:", error.message);
    return res.status(500).json({ message: "Server error updating startup." });
  }
};

module.exports = {
  createStartup,
  getStartupById,
  updateStartup,
};