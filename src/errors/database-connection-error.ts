import CustomError from './custom-error';

export default class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  reason = 'Error connection to database';

  constructor(message: string) {
    super(message);

    // Because is extending builtin shit
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
