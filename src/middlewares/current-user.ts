import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import pino from 'pino';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    req.currentUser = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!,
    ) as UserPayload;
  } catch (err) {
    const log = pino();
    log.error(err);
  }

  return next();
};
