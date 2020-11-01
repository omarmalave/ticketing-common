import CustomError from './custom-error';
export default class NotAuthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
