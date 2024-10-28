const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configurations/db");

const authRoutes=require("./services/authentication/routes/authRoutes")
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

module.exports = app;
