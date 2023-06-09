import express from "express";
import { create, index, update } from "../controllers/companieController";
import { companiesRequest, companiesShow } from "../contracts/request/companieRequest";
import { validationResults } from "../../../middleware/validationResults";
const router = express.Router();

router.get('/companies', index)
router.post('/companies', companiesRequest(), validationResults, create)
router.put('/companies/:id/set_active', companiesShow(), validationResults, update)

export { router as companiesRouter };
