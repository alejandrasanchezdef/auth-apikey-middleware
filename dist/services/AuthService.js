"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHash = void 0;
const DBRepository_1 = require("../DB/DBRepository");
function getHash() {
    return DBRepository_1.dbRepo.getKey();
}
exports.getHash = getHash;
