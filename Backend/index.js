import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import  transactionRoutes from "./routes/transaction.route.js"
import authRoutes from"./routes/auth.route.js"
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);
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



