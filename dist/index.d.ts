import { NextFunction, Request, Response } from "express";
export declare const validateKey: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
