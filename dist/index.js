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
const validateKey = async (req, res, next) => {
    try {
        const apiKey = req.headers["x-api-key"];
        console.log('apiKey', apiKey);
        if (apiKey === null) {
            return res.status(403).send({ message: 'Forbidden' });
        }
        const hash = await get();
        console.log('db hash', hash);
        if (apiKey === hash.ApiKeyHash) {
            return next();
        }
        else {
            return res.status(401).send({ message: 'Missing Token' });
        }
    }
    catch (err) {
        return res.send({ message: 'Missing Token' });
    }
};
exports.validateKey = validateKey;
function get() {
    return paramsService.getHash();
}
