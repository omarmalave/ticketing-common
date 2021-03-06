import CustomError from './custom-error';

export default class NotAuthorizedError extends CustomError {
  statusCode = 401;

  reason = 'Not Authorized';

  constructor() {
    super('Not Authorized');

    // Because is extending builtin shit
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason }];
  }
}
