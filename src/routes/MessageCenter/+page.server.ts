import type { Load } from "@sveltejs/kit";
import sqlite3 from "sqlite3";


export const load = () => {
        const db = new sqlite3.Database('./Database/BillyMojojojoFinn.db' ,sqlite3.OPEN_READWRITE,(err)=>{
            if (err) return console.error(err.message);
        });
 
        var sql = 'SELECT * FROM Collection';
        db.all(sql,[], (err,data) => {
            if (err) return console.error(err.message);     
            //console.log(data);
            return JSON.stringify(data)
        }); 


}