import { Knex } from 'knex';
/**
 * Singleton para acceso a db
 */
export declare class DatabaseChallenger {
    private static instance;
    dbConfigChallenger: Knex.Config;
    pool: Knex;
    private constructor();
    static getInstance(): DatabaseChallenger;
}
export default DatabaseChallenger;
