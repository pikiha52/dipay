import { body, param, ValidationChain } from 'express-validator';

const companiesRequest = (): ValidationChain[] => [
    body('company_name').isLength({ min: 1 }).withMessage('company name is required'),
    body('address').isLength({ min: 1 }).withMessage('address is required'),
];

const companiesShow = (): ValidationChain[] => [
    param('id').isLength({ min: 1 }).withMessage('id company is required').isMongoId().withMessage('id company not supported')
]

interface CompaniesRequest {
    company_name: string;
    telephone_number: string;
    address: string;
}

interface CompaniesShowRequest {
    id: string
}

export {
    CompaniesRequest,
    CompaniesShowRequest,
    companiesRequest,
    companiesShow,
};
