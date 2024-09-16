import db from "../config/db.config.js";

const addExpenseData = async (title, category, description, date, amount, user_id) => {
    const { rows } = await db.query("INSERT INTO expenses (title, amount, description, date, category, user_id ) VALUES($1, $2, $3, $4, $5 ,$6) RETURNING *", [title, amount, description, date, category, user_id]);
    return rows.length > 0 ? rows[0] : [];
}

const getExpenseData = async (userId) => {
    const { rows } = await db.query("SELECT * FROM expenses WHERE user_id = $1",[userId]);
    return rows.length > 0 ? rows : [];
}

const getExpenseDataById = async (id) => {
    const { rows } = await db.query("SELECT * FROM expenses WHERE id = $1", [id]);
    return rows.length > 0 ? rows[0] : [];
}

const deleteExpenseData = async (id) => {
    const { rows } = await db.query("DELETE FROM expenses WHERE id = $1 RETURNING *", [id]);
    return rows.length > 0 ? rows[0] : [];
}


export { addExpenseData, getExpenseData, deleteExpenseData, getExpenseDataById }     