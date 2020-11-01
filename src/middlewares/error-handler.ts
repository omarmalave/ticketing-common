import { NextFunction, Request, Response } from 'express';
import pino from 'pino';
import CustomError from '../errors/custom-error';

export default (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  const log = pino();
  log.error(err);

  return res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
