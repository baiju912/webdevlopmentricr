
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
app.use(morgan("dev"));
