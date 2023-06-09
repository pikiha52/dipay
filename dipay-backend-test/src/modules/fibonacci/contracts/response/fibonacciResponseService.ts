interface FibonacciResponse<T> {
    code: number;
    result: T;
    message: string;
}

export {
    FibonacciResponse,
}