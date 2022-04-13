import knex, { Knex } from 'knex';

/**
 * Singleton para acceso a db
 */
export class DatabaseChallenger {
    private static instance: DatabaseChallenger;
    dbConfigChallenger: Knex.Config;
    pool: Knex;
    private constructor () {
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
        this.pool = knex(this.dbConfigChallenger);
    }

    public static getInstance(): DatabaseChallenger {
        if (!DatabaseChallenger.instance) {
            DatabaseChallenger.instance = new DatabaseChallenger();
        }

        return DatabaseChallenger.instance;
    }
}

export default DatabaseChallenger;
