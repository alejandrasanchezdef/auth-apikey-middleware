import { NextFunction, Request, Response } from "express";
import * as paramsService from "./services/AuthService";

export const validateKey = (
  req: Request,
  Response: Response,
  next: NextFunction
) => {
  try {
    const apiKey = req.headers["Key"] || req.headers["key"];
    console.log(apiKey);
    get().then((val:any)=> {
      if(apiKey === val.ApiKeyHash){
        return next();
      }else{
        return Response.send({ error: 'Error' });
      }
    });

   return next();
  } catch (err) {
    Response.status(400);
    return Response.send({ error: 'Error' });
  }
};

async function get() {
  const hash = await paramsService.getHash();
  console.log('hash', hash);
  return hash;
}