interface CombinationResponse<T> {
    code: number;
    result: T;
    message: string;
}

export {
    CombinationResponse,
}