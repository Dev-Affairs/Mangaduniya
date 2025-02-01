import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { config } from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import ejsMate from "ejs-mate";
import client from "./routes/client.js";
import path from "path";
import { fileURLToPath } from "url";

config();
const app = express();

//Security Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: "Too many requests from this IP, please try later",
});
app.use(limiter);
app.use(helmet());

//Logging Midddleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middlewares
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.set("trust proxy", 1);

// EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("src/public"));
app.engine("ejs", ejsMate);
client(app);

export default app;
