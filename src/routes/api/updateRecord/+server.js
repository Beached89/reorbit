import sqlite3 from "sqlite3";
import { json } from '@sveltejs/kit';

function _updateRecord(x,y ,uid) {
    var db = new sqlite3.Database('./Database/BillyMojojojoFinn.db' ,sqlite3.OPEN_READWRITE,(err)=>{
        if (err) return console.error(err.message);
    });

    const sql = `
        Update Collection
            set X_Cord = $x, Y_Cord = $y
        Where uid = $uid
    `;
    const stmnt = db.prepare(sql);
    stmnt.run(x,y,uid)
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {	
    const { x,y,uid } = await request.json();	
    _updateRecord(x,y,uid)
    return json(1 + 2);
}