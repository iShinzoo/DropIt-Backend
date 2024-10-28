import express, { json } from "express";
import { config } from "dotenv";
import connectDB from "./configurations/db";

config();

connectDB();

const authRoutes=require("./services/authentication/routes/authRoutes")

const app = express();

app.use(json());
app.use("/api/auth", authRoutes);

export default app;
