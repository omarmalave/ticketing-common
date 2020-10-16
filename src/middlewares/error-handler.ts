import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/custom-error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
