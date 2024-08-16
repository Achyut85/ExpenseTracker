import express from "express";
import env from "dotenv";
import cors from "cors";
import  transactionRoutes from "./routes/transaction.route.js"

env.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/api/tr", transactionRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});



