interface CountrieResponse<T> {
    code: number;
    result: T;
    message: string;
}

export {
    CountrieResponse,
}