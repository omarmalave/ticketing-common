import CustomError from './custom-error';

export default class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    // Because is extending builtin shit
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
