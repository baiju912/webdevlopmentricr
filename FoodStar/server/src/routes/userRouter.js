import express from "express";
import { UserUpdate} from "../controllers/userController.js";
import {Protect} from "../middlewares/authMiddlewares.js";
import multer from "multer";

const router = express.Router();
const Uploads = multer();

router.put("/update", Protect, UserUpdate);

export default router; 