import axios from "axios"
import { CountrieResponse } from "../contracts/response/countrieResponse"

const indexService = async (): Promise<CountrieResponse<any>> => {
    let results: any = {}
    await axios.request({
        url: 'https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json',
        method: 'get'
    }).then((response: any) => {
        results = {
            code: response.status,
            data: response.data
        }
    }).catch((err: any) => {
        results = {
            code: 400,
            data: "null"
        }
    })

    if (results.code != 200) {
        const response: CountrieResponse<string> = {
            code: 400,
            result: "null",
            message: "Something Went Wrong"
        }

        return response
    }

    const result: any = []
    results.data.forEach((item: any, key: number) => {
        const { name, region, timezones } = item
        result.push({ name, region, timezones})
    });

    const response: CountrieResponse<object> = {
        code: 200,
        result: result,
        message: "Success"
    }

    return response
}

export {
    indexService,
}