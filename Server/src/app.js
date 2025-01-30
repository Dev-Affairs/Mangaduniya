import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.set("trust proxy", 1);

export default app;
