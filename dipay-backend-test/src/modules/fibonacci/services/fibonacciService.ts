import { Fibonacci } from "../contracts/request/fibonacciRequest";
import { FibonacciResponse } from "../contracts/response/fibonacciResponseService";

export const indexService = (params: Fibonacci): FibonacciResponse<object> => {
    const filteredData: Fibonacci = {
        n: params.n,
    }

    if (filteredData.n <= 0) {
        const response: FibonacciResponse<object> = {
            code: 400,
            result: {},
            message: "Invalid input. n should be a positive integer."
        }
        return response
    }

    if (filteredData.n === 1) {
        // return [0]
    }

    if (filteredData.n === 2) {
        // return [0, 1]
    }

    const sequence = [0, 1]
    let fibonacci: string = ''

    for (let i = 2; i < filteredData.n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2]
        fibonacci += `${nextNumber},`
        sequence.push(nextNumber)
    }

    const response: FibonacciResponse<object> = {
        code: 200,
        result: {
            result: fibonacci
        },
        message: "Success."
    }
    return response
}