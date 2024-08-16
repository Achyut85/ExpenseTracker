import pg from "pg";
import env from "dotenv";
env.config();
const db = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Error connecting to PostgreSQL:", err);
    }
    else {
        console.log("Connected to PostgreSQL:", res.rows[0]);
    }
});

export default db;