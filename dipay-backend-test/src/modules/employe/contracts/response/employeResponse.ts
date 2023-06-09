interface EmployeResponse<T> {
    code: number;
    result: T;
    message: string;
}

export {
    EmployeResponse, 
}