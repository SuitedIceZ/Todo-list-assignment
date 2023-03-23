const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/.env" });

// Connect to database
connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5013;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
