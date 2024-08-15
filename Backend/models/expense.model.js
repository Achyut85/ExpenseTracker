import db from "../config/db.config.js";

const addExpenseData = async (title, category, description, date, amount ) => {
           const {rows} = await db.query("INSERT INTO expenses (title, amount, description, date, category ) VALUES($1, $2, $3, $4, $5 ) RETURNING *",[title, amount, description, date ,category]);
            return rows[0];
}

const getExpenseData = async () => {
        const {rows} = await db.query("SELECT * FROM expenses ORDER BY id DESC");
        return rows;
}

const getExpenseDataById = async (id) => {
    const {rows} = await db.query("SELECT * FROM expenses WHERE id = $1",[id]);
    return rows[0];
}

const deleteExpenseData = async (id) => {
    const {rows} = await db.query("DELETE FROM expenses WHERE id = $1 RETURNING *", [id]);
    return rows[0];
}


export { addExpenseData , getExpenseData, deleteExpenseData, getExpenseDataById}     