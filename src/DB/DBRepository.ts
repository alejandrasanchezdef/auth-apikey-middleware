import DatabaseChallenger from './DatabaseChallenger';

export class DBRepository  {
    async getKey() {
        try {
            const pool = DatabaseChallenger.getInstance().pool;

            const tran = await pool.transaction({ isolationLevel: 'read uncommitted' });
            const res = await tran.table('ApiKey')
                .select('*')
                .whereRaw('ApiKeyId = 1')
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

export var dbRepo: DBRepository= new DBRepository();