"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseChallenger = void 0;
const knex_1 = __importDefault(require("knex"));
/**
 * Singleton para acceso a db
 */
class DatabaseChallenger {
    static instance;
    dbConfigChallenger;
    pool;
    constructor() {
        this.dbConfigChallenger = {
            client: 'mssql',
            connection: {
                user: process.env.CHALLENGER_USERNAME,
                password: process.env.CHALLENGER_PASSWORD,
                host: process.env.CHALLENGER_HOSTNAME,
                database: process.env.CHALLENGER_DB_NAME,
                port: parseInt(process.env.CHALLENGER_PORT || '1433'),
            },
            pool: { min: 0, max: 7 }
        };
        this.pool = (0, knex_1.default)(this.dbConfigChallenger);
    }
    static getInstance() {
        if (!DatabaseChallenger.instance) {
            DatabaseChallenger.instance = new DatabaseChallenger();
        }
        return DatabaseChallenger.instance;
    }
}
exports.DatabaseChallenger = DatabaseChallenger;
exports.default = DatabaseChallenger;
