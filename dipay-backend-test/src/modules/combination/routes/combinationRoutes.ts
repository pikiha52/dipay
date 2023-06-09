import express from "express";
import { validationResults } from "../../../middleware/validationResults";
import { index } from "../controllers/cobinationController";
const router = express.Router();

router.post('/combination', index)

export { router as combinationRoutes };
