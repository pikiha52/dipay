import { body, ValidationChain } from 'express-validator';

const fibonacciRequest = (): ValidationChain[] => [
    body('n').isLength({ min: 1 }).withMessage('n is required'),
];

interface Fibonacci {
    n: number;
}

export {
    fibonacciRequest,
    Fibonacci,
};
