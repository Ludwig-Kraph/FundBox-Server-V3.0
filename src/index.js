const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const generateRoutes = require("./routes/generateRoutes");
const swapRoutes = require("./routes/swapRoutes");
const transferRoutes = require("./routes/transferRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/generate", generateRoutes);
app.use("/api/swap", swapRoutes);
app.use("/api/transfer", transferRoutes);

// Root Endpoint
app.get("/", (req, res) => {
    res.send("Welcome to Fundbox API");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Fundbox Server running on port ${PORT}`);
});
