import app from "./app";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authMiddleware from "./middleware/authMiddleware.js";
import errorHandler from "./middleware/errorHandler";

const app = express();


// Core middleware
app.use(json());
app.use(cors());
app.use(helmet());

// Rate limiter
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
