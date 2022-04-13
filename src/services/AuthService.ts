import { dbRepo } from "../DB/DBRepository";

export function getHash() {
    return dbRepo.getKey();
}


