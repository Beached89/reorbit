import type { Load } from "@sveltejs/kit";
import type { ctoonLibrary } from '$lib/types.ts';
import sqlite3 from "sqlite3";


export const load: Load = async () => {

        var loadDataPromise = new Promise<ctoonLibrary[]>((resolve, reject) => {
            var db = new sqlite3.Database('./Database/BillyMojojojoFinn.db' ,sqlite3.OPEN_READWRITE,(err)=>{
                if (err) return console.error(err.message);
            });
            var sql = 'SELECT * FROM Collection';
            db.all<ctoonLibrary>(sql, (err: Error|null, rows: ctoonLibrary[]) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows)
            });
        });
        var rows = await loadDataPromise;

        return {'message': rows};
}
