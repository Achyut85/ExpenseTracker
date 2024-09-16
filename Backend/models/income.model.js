import db from "../config/db.config.js";

const addIncomeData = async (title, category, description, date, amount,user_id ) => {
           const {rows} = await db.query("INSERT INTO incomes (title, amount, description, date, category, user_id ) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *",[title, amount , description, date ,category, user_id]);
           return rows.length > 0 ? rows[0] : [];
}

const getIncomeData = async (userId) => {
    const { rows } = await db.query("SELECT * FROM incomes WHERE user_id = $1",[userId]);
        return  rows.length > 0 ? rows : [];
}

const getIncomeDataById = async (id) => {
    const {rows} = await db.query("SELECT * FROM incomes WHERE id = $1",[id]);
    return rows.length > 0 ? rows[0] : [];
}

const deleteIncomeData = async (id) => {
    const {rows} = await db.query("DELETE FROM incomes WHERE id = $1 RETURNING *", [id]);
    return rows.length > 0 ? rows[0] : [];
}


export { addIncomeData , getIncomeData, deleteIncomeData, getIncomeDataById}     