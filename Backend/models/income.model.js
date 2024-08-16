import db from "../config/db.config.js";

const addIncomeData = async (title, category, description, date, amount ) => {
           const {rows} = await db.query("INSERT INTO incomes (title, amount, description, date, category ) VALUES($1, $2, $3, $4, $5 ) RETURNING *",[title, amount, description, date ,category]);
            return rows[0];
}

const getIncomeData = async () => {
        const {rows} = await db.query("SELECT * FROM incomes ORDER BY id DESC");
        return rows;
}

const getIncomeDataById = async (id) => {
    const {rows} = await db.query("SELECT * FROM incomes WHERE id = $1",[id]);
    return rows[0];
}

const deleteIncomeData = async (id) => {
    const {rows} = await db.query("DELETE FROM incomes WHERE id = $1 RETURNING *", [id]);
    return rows[0];
}


export { addIncomeData , getIncomeData, deleteIncomeData, getIncomeDataById}     