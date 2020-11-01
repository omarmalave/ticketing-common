import CustomError from './custom-error';
export default class NotFoundError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
