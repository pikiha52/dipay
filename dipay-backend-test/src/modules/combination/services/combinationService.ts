import { CombinationRequest } from "../contracts/request/combinationRequest";
import { CombinationResponse } from "../contracts/response/combinationResponse";

const indexService = async (params: CombinationRequest): Promise<CombinationResponse<any>> => {
    if ((!params.n) || (!params.r)) {
        const response: CombinationResponse<string> = {
            code: 400,
            result: "null",
            message: "n or r is required"
        }

        return response
    }

    const combinationRequest = combination(params.n, params.r)
    const response: CombinationResponse<object> = {
        code: 200,
        result: {
            result: combinationRequest
        },
        message: "Success"
    }

    return response
}

function factorial(num: number): number {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


function combination(n: number, r: number): number {
    const numerator = factorial(n);
    const denominator = factorial(r) * factorial(n - r);
    const result = numerator / denominator;
    return result;
}

export {
    indexService
}