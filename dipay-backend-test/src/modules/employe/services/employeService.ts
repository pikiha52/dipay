import { sendToQueue } from "../../../helpers/sendToRabbit";
import { EmployeParamsUpdate, EmployeRequest, EmployeRequestAdd, EmployeRequestById } from "../contracts/request/employeRequest";
import { SendEmail } from "../contracts/request/employeSendemail";
import { EmployeResponse } from "../contracts/response/employeResponse";
import employes from "../models/employes";

const indexServiceEmploye = async (params: EmployeRequest): Promise<EmployeResponse<any>> => {
    const request = employes.where({
        company_id: params.companies_id
    }).populate('company_id')
    const result = await request.exec();

    if (result.length == 0) {
        const response: EmployeResponse<string> = {
            code: 422,
            result: "null",
            message: "Data is not found"
        }

        return response
    }

    const data: any = {}
    result.forEach((item: any, key: number) => {
        const { id: company_id, company_name, is_active } = item.company_id
        const { id, name, phone_number, jobtitle } = item
        if (!data[company_id]) {
            data[company_id] = {
                id: company_id,
                company_name,
                is_active,
                employess: []
            }
        }

        data[params.companies_id].employess.push({ id, name, phone_number, jobtitle })
    })

    const results = Object.values(data);
    const response: EmployeResponse<any> = {
        code: 200,
        result: results,
        message: "Success"
    }

    return response
}

const employeByIdService = async (params: EmployeRequestById): Promise<EmployeResponse<any>> => {
    const data = await employes.findById(params.employee_id)
    if (!data) {
        const response: EmployeResponse<string> = {
            code: 422,
            result: "null",
            message: "Data not found"
        }

        return response
    }

    const results = {
        id: data.id,
        name: data.name,
        phone_number: data.phone_number,
        jobtitle: data.jobtitle,
    }

    const response: EmployeResponse<object> = {
        code: 200,
        result: results,
        message: "Success"
    }

    return response
}

const addEmployeeService = async (params: EmployeRequestAdd): Promise<EmployeResponse<any>> => {
    try {
        const employe = await employes.create(params);
        const payloadEmail: SendEmail = {
            email: employe.email,
            subject: "Hello",
            body: "Success!"
        }
        sendEmailRequest(payloadEmail)
        const response: EmployeResponse<object> = {
            code: 201,
            result: {
                id: employe.id,
                company: employe.company_id
            },
            message: "Success"
        }

        return response
    } catch (err: any) {
        const response: EmployeResponse<string> = {
            code: 409,
            result: "null",
            message: "email already exists"
        }

        return response
    }
}

const updateEmployeeService = async (params: EmployeParamsUpdate, body: EmployeRequestAdd): Promise<EmployeResponse<any>> => {
    const filter = { _id: params.employee_id, company_id: params.company_id }
    const update = body
    const options = { new: true }
    try {
        const employeUpdate = await employes.findOneAndUpdate(filter, update, options)

        if (!employeUpdate) {
            const response: EmployeResponse<string> = {
                code: 404,
                result: "null",
                message: "Employe not found"
            }

            return response
        }

        const response: EmployeResponse<object> = {
            code: 200,
            result: {
                id: employeUpdate.id,
                company_id: employeUpdate.company_id
            },
            message: "Success"
        }

        return response
    } catch (err: any) {
        const response: EmployeResponse<string> = {
            code: 409,
            result: "null",
            message: "Email already exists"
        }

        return response
    }
}

const employeDeleteService = async (params: EmployeRequestById): Promise<EmployeResponse<any>> => {
    const filter = { _id: params.employee_id };
    await employes.deleteOne(filter)
    const response: EmployeResponse<string> = {
        code: 204,
        result: "null",
        message: "Success"
    }

    return response

}

const sendEmailRequest = async (params: SendEmail): Promise<void> => {
    sendToQueue('emails', params)
}

export {
    indexServiceEmploye,
    employeByIdService,
    addEmployeeService,
    updateEmployeeService,
    employeDeleteService,
}