import { CompaniesRequest, CompaniesShowRequest } from "../contracts/request/companieRequest";
import { CompanieeResponse } from "../contracts/response/companieResponse";
import companies from "../models/companies";

const indexCompanyService = async (): Promise<CompanieeResponse> => {
    const data = await companies.find()
    const dataCount = data.length
    if (dataCount < 1) {
        const response: CompanieeResponse = {
            code: 422,
            result: 'null',
            message: 'Data is not found'
        }

        return response
    }

    const response: CompanieeResponse = {
        code: 402,
        result: {
            count: 0,
            rows: data
        },
        message: 'Success'
    }

    return response
}

const insertCommpanyService = async (params: CompaniesRequest): Promise<CompanieeResponse> => {
    const filteredData: CompaniesRequest = {
        company_name: params.company_name,
        telephone_number: params.telephone_number,
        address: params.address,
    }

    try {
        const company = new companies(filteredData)
        await company.save()

        const response: CompanieeResponse = {
            code: 201,
            result: {
                id: company.id,
            },
            message: "Success"
        }

        return response
    } catch (error: any) {
        const response: CompanieeResponse = {
            code: 409,
            result: "null",
            message: "Company Name already exist"
        }

        return response
    }
}

const updateStatus = async (params: any): Promise<CompanieeResponse> => {
    const filter = { _id: params.id };
    const update = { is_active: true };
    const options = { new: true };
    const companieUpdate = await companies.findOneAndUpdate(filter, update, options);

    if (companieUpdate !== null) {
        if (companieUpdate.is_active) {
            const response: CompanieeResponse = {
                code: 400,
                result: "null",
                message: "Company is already active"
            }

            return response
        } else {
            const response: CompanieeResponse = {
                code: 200,
                result: {
                    id: companieUpdate.id,
                    is_active: companieUpdate.is_active,
                },
                message: "Success"
            }

            return response
        }
    } else {
        const response: CompanieeResponse = {
            code: 422,
            result: "null",
            message: "Data is not found"
        }

        return response
    }

}

export {
    indexCompanyService,
    insertCommpanyService,
    updateStatus,
}