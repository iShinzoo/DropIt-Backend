import express, { json } from "express";
import { config } from "dotenv";
import connectDB from "./configurations/db";

config();

connectDB();

const app = express();

app.use(json());
app.use("/api/auth", require("./routes/authRoutes"));

export default app;
