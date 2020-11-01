import { ValidationError } from 'express-validator';
import CustomError from './custom-error';
export default class RequestValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[], message?: string);
    serializeErrors(): {
        message: any;
        field: string;
    }[];
}
