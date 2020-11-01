import { NextFunction, Request, Response } from 'express';
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
declare const _default: (req: Request, res: Response, next: NextFunction) => void;
export default _default;
