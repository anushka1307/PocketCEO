const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const startupRoutes = require("./routes/startup.routes");

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

module.exports = app;