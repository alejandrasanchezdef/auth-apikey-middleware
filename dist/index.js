"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKey = void 0;
const paramsService = __importStar(require("./services/AuthService"));
const validateKey = (req, Response, next) => {
    try {
        const apiKey = req.headers["ApiKey"] || req.headers["apikey"];
        console.log(apiKey);
        get().then((val) => {
            if (apiKey === val.ApiKeyHash) {
                return next();
            }
            else {
                return Response.send({ error: 'Error' });
            }
        });
        return next();
    }
    catch (err) {
        Response.status(400);
        return Response.send({ error: 'Error' });
    }
};
exports.validateKey = validateKey;
async function get() {
    const hash = await paramsService.getHash();
    console.log('hash', hash);
    return hash;
}
