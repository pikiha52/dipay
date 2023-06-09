import { Request, Response } from "express";
import { response } from "../../../helpers/response";
import { CombinationRequest } from "../contracts/request/combinationRequest";
import { indexService } from "../services/combinationService";

const index = async (req: Request, res: Response): Promise<void> => {
    const body: CombinationRequest = {
        n: req.body.n,
        r: req.body.r,
    }

    const request = await indexService(body)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}  

export {
    index,
}