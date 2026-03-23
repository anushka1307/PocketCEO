const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const startupRoutes = require("./routes/startup.routes");
const chatRoutes = require("./routes/chat.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const conversationRoutes = require("./routes/conversation.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Pocket CEO API is running." });
});

app.use("/api/startups", startupRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/conversations", conversationRoutes);

module.exports = app;