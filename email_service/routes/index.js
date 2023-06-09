import express from "express";
import { index } from "../contollers/baseController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/products", verifyToken, index);

export default router;
