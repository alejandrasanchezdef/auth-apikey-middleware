"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbRepo = exports.DBRepository = void 0;
const DatabaseChallenger_1 = __importDefault(require("./DatabaseChallenger"));
class DBRepository {
    async getKey() {
        try {
            const pool = DatabaseChallenger_1.default.getInstance().pool;
            const tran = await pool.transaction({ isolationLevel: 'read uncommitted' });
            const res = await tran.table('ApiKey')
                .select('*')
                .whereRaw('ApiKeyId = 1');
            tran.commit();
            const resp = res[0];
            return resp;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
}
exports.DBRepository = DBRepository;
exports.dbRepo = new DBRepository();
