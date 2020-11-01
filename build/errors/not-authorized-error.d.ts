import CustomError from './custom-error';
export default class NotAuthorizedError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
