import express from "express";
import { index } from "../controllers/fibonacciController";
import { fibonacciRequest } from "../contracts/request/fibonacciRequest";
import { validationResults } from "../../../middleware/validationResults";
const router = express.Router();

router.post('/fibonacci', fibonacciRequest(), validationResults, index)

export { router as fibonacciRoutes };
