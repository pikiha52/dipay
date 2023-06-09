import { body, param, ValidationChain } from 'express-validator';

const employeeRequest = (): ValidationChain[] => [
    body('name').isLength({ min: 1 }).withMessage('name is required'),
    body('email').isLength({ min: 1 }).withMessage('email is required'),
    body('jobtitle').isLength({ min: 1 }).withMessage('job title is required'),
];

const employeCompanyRequest = (): ValidationChain[] => [
    param('company_id').isLength({ min: 1 }).withMessage('company id is required').isMongoId().withMessage('company id not provided'),
]

const employeByParams = (): ValidationChain[] => [
    param('id').isLength({ min: 1 }).withMessage('id is required').isMongoId().withMessage('id not provided'),
]

const employeUpdateRequest = (): ValidationChain[] => [
    param('company_id').isLength({ min: 1 }).withMessage('company id is required').isMongoId().withMessage('company id not provided'),
    param('employee_id').isLength({ min: 1 }).withMessage('employee id is required').isMongoId().withMessage('employee id not provided'),
]

interface EmployeRequest {
    companies_id: string
}

interface EmployeRequestById {
    employee_id: string
}

interface EmployeRequestAdd {
    name: string
    email: string
    phone_number: string
    jobtitle: string
    company_id: string
}

interface EmployeParamsUpdate {
    company_id: string
    employee_id: string
}

export {
    EmployeRequest,
    EmployeRequestById,
    EmployeRequestAdd,
    EmployeParamsUpdate,
    employeeRequest,
    employeCompanyRequest,
    employeByParams,
    employeUpdateRequest,
}