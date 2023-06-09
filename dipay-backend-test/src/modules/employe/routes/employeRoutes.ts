import express from "express";
import { validationResults } from "../../../middleware/validationResults";
import { addEmployee, deleteEmploye, employeById, index, updateEmployee } from "../controllers/employeController";
import { employeByParams, employeCompanyRequest, employeUpdateRequest, employeeRequest } from "../contracts/request/employeRequest";
const router = express.Router();

router.get('/companies/:id/employees', employeByParams(), validationResults, index)
router.get('/employees/:id', employeByParams(), validationResults, employeById)
router.post('/companies/:company_id/employees', employeCompanyRequest(), validationResults, employeeRequest(), validationResults, addEmployee)
router.put('/companies/:company_id/employees/:employee_id', employeUpdateRequest(), validationResults, employeeRequest(), validationResults, updateEmployee)
router.delete('/employees/:id', employeByParams(), validationResults, deleteEmploye)


export { router as employeRoutes };
