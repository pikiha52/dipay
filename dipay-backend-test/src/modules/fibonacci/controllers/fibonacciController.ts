import { Request, Response } from "express"
import { response } from "../../../helpers/response"
import { Fibonacci } from "../contracts/request/fibonacciRequest";
import { indexService } from "../services/fibonacciService";

export const index = async (req: Request, res: Response) => {
    const requestData: Fibonacci = req.body;
    const request = indexService(requestData)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}