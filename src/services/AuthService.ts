import { dbRepo } from "../DB/DBRepository";



export async function getHash() {
    return await dbRepo.getKey();
}


