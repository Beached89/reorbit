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
            db.close();
        });
        var rows = await loadDataPromise;

        return {'message': rows};
}

export function _updateRecord(x: number,y: number ,uid: number): void {
    var db = new sqlite3.Database('./Database/BillyMojojojoFinn.db' ,sqlite3.OPEN_READWRITE,(err)=>{
        if (err) return console.error(err.message);
    });

    const sql = `
        update Collection
            set X_Cord, Y_Cord = $x, $y
        where uid = $uid
    `;
    const stmnt = db.prepare(sql);
    stmnt.run({x,y,uid})
}