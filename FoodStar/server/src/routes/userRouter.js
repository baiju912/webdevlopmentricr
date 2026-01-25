import express from "express";
import { UserUpdate} from "../controllers/userController.js";
import {Protect} from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.put("/update", Protect, UserUpdate);

export default router; 