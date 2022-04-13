import { NextFunction, Request, Response } from "express";
import * as paramsService from "./services/AuthService";

export const validateKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = req.headers["x-api-key"];
    console.log('apiKey', apiKey);
    if(apiKey === null){
      return res.status(403).send({ message: 'Forbidden' });
    }
    const hash:any = get();
    console.log('db hash', hash);
    if(apiKey === hash.ApiKeyHash){
      return next();
    }else{
      return res.status(401).send({ message: 'Missing Token' });
    }
  } catch (err) {
    return res.send({ message: 'Missing Token' });
  }
};

function get() {
  return paramsService.getHash();
}