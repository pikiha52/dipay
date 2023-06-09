import { Request, Response } from "express"
import { response } from "../../../helpers/response"
import { indexCompanyService, insertCommpanyService, updateStatus } from "../services/companyService"
import { CompaniesRequest, CompaniesShowRequest } from "../contracts/request/companieRequest"

const index = async (req: Request, res: Response): Promise<void> => {
    const request = await indexCompanyService()
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const create = async (req: Request, res: Response): Promise<void> => {
    const requestData: CompaniesRequest = req.body;
    const request = await insertCommpanyService(requestData)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

const update = async (req: Request, res: Response): Promise<void> => {
    const request = await updateStatus(req.params)
    return response(res, request.code, `${request.code}`, request.result, request.message)
}

export {
    index,
    create,
    update,
}

