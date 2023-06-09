import express from "express";
import { validationResults } from "../../../middleware/validationResults";
import { index } from "../controllers/countrieController";
const router = express.Router();

router.get('/countries', index)

export { router as countrieRoutes };
