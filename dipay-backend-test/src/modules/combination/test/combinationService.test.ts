import { CombinationRequest } from "../contracts/request/combinationRequest"
import { CombinationResponse } from "../contracts/response/combinationResponse"
import { indexService } from "../services/combinationService"

describe('combinationService', () => {
    it('should return an error response if n or r is missing', async () => {
        const params: CombinationRequest = {
            n: 5,
            r: 0
        };

        const expectedResponse: CombinationResponse<string> = {
            code: 400,
            result: "null",
            message: "n or r is required",
        };

        const response = await indexService(params);

        expect(response).toEqual(expectedResponse);
    });

    it('should return the correct combination result', async () => {
        const params: CombinationRequest = {
            n: 5,
            r: 2,
        };

        const expectedResponse: CombinationResponse<object> = {
            code: 200,
            result: {
                result: 10,
            },
            message: "Success",
        };

        const response = await indexService(params);

        expect(response).toEqual(expectedResponse);
    });
})