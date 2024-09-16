 import db from "../config/db.config.js";
 
 export const getUser = async (email) => {
    const {rows} = await db.query("SELECT * FROM users WHERE email=$1",[email]);
    return rows.length > 0 ? rows[0] : null;
}

export const addUser = async ( name, email, password) =>{
    await db.query("INSERT INTO users ( email, password, name) VALUES($1, $2, $3)",[email, password,name]);
}