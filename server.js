const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./db");
const { createUserTable } = require("./models/userModel");

const authRoutes = require("./routes/authRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Database Tables
createUserTable();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", chatbotRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://192.168.56.1:${PORT}`);
});
