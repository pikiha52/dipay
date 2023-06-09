import { Request, Response } from "express";
import { response } from "../../../helpers/response";
import { indexService } from "../services/countrieService";

const index = async (req: Request, res: Response): Promise<void> => {
    const request = await indexService()
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

export {
    index
}