import CustomError from './custom-error';

export default class NotFoundError extends CustomError {
  statusCode = 404;

  reason = 'not found';

  constructor() {
    super('Route not found');

    // Because is extending builtin shit
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason }];
  }
}
