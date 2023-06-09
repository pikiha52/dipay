import { Request, Response } from "express";
import { response } from "../../../helpers/response";
import { EmployeParamsUpdate, EmployeRequest, EmployeRequestAdd, EmployeRequestById } from "../contracts/request/employeRequest";
import { addEmployeeService, employeByIdService, employeDeleteService, indexServiceEmploye, updateEmployeeService } from "../services/employeService";

const index = async (req: Request, res: Response): Promise<void> => {
    const params: EmployeRequest = {
        companies_id: req.params.id
    }

    const request = await indexServiceEmploye(params)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const employeById = async (req: Request, res: Response): Promise<void> => {
    const params: EmployeRequestById = {
        employee_id: req.params.id
    }

    const request = await employeByIdService(params)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const addEmployee = async (req: Request, res: Response): Promise<void> => {
    const params: EmployeRequest = {
        companies_id: req.params.company_id
    }
    const body: EmployeRequestAdd = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        jobtitle: req.body.jobtitle,
        company_id: params.companies_id,
    }
    
    const request = await addEmployeeService(body)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const updateEmployee = async (req: Request, res: Response): Promise<void> => {
    const params: EmployeParamsUpdate = {
        company_id: req.params.company_id,
        employee_id: req.params.employee_id,
    }
    const body: EmployeRequestAdd = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        jobtitle: req.body.jobtitle,
        company_id: params.company_id,
    }

    const request = await updateEmployeeService(params, body)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const deleteEmploye = async (req: Request, res: Response): Promise<void> => {
    const params: EmployeRequestById = {
        employee_id: req.params.id
    }

    const request = await employeDeleteService(params)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

export {
    index,
    employeById,
    addEmployee,
    updateEmployee,
    deleteEmploye,
}