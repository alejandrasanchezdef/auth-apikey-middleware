import { NextFunction, Request, Response } from "express";
import * as paramsService from "./services/AuthService";

export const validateKey = (
  req: Request,
  Response: Response,
  next: NextFunction
) => {
  try {
    const apiKey = req.headers["x-api-key"] || req.headers["x-api-key"];
    console.log(apiKey);
    get().then((val:any)=> {
      if(apiKey === val.ApiKeyHash){
        return next();
      }else{
        return Response.send({ error: 'Missing Token' });
      }
    });

   return next();
  } catch (err) {
    Response.status(400);
    return Response.send({ error: 'Missing Token' });
  }
};

async function get() {
  const hash = await paramsService.getHash();
  console.log('hash', hash);
  return hash;
}