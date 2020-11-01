import CustomError from './custom-error';
export default class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}
