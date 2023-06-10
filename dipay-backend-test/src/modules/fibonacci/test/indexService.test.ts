import { Fibonacci } from "../contracts/request/fibonacciRequest";
import { FibonacciResponse } from "../contracts/response/fibonacciResponseService";
import { indexService } from "../services/fibonacciService";

describe('indexService', () => {
    it('should return an error response for negative input', () => {
        const params: Fibonacci = {
            n: -5,
        };

        const expectedResponse: FibonacciResponse<object> = {
            code: 400,
            result: {},
            message: "Invalid input. n should be a positive integer.",
        };

        const response = indexService(params);

        expect(response).toEqual(expectedResponse);
    });

    it('should return an error response for zero input', () => {
        const params: Fibonacci = {
            n: 0,
        };

        const expectedResponse: FibonacciResponse<object> = {
            code: 400,
            result: {},
            message: "Invalid input. n should be a positive integer.",
        };

        const response = indexService(params);

        expect(response).toEqual(expectedResponse);
    });

    it('should return an success response for 1 n value', () => {
        const params: Fibonacci = {
            n: 1,
        };

        const expectedResponse: FibonacciResponse<object> = {
            code: 200,
            result: {
                result: "0"
            },
            message: "Success."
        };

        const response = indexService(params);

        expect(response).toEqual(expectedResponse);
    });

    it('should return an success response for 2 n value', () => {
        const params: Fibonacci = {
            n: 2,
        };

        const expectedResponse: FibonacciResponse<object> = {
            code: 200,
            result: {
                result: "0, 1"
            },
            message: "Success."
        };

        const response = indexService(params);

        expect(response).toEqual(expectedResponse);
    });

    it('should return an success for 50 n values', () => {
        const params: Fibonacci = {
            n: 50,
        };

        const expectedResponse: FibonacciResponse<object> = {
            code: 200,
            result: {
                result: "1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049,"
            },
            message: "Success."
        }

        const response = indexService(params)

        expect(response).toEqual(expectedResponse)
    })
});
