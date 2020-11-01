import { ValidationError } from 'express-validator';
import CustomError from './custom-error';

export default class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[], message = '') {
    super(message);

    // Because is extending builtin shit
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
