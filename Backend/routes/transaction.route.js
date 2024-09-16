import express from "express";
import { addIncome, deleteIncome, getIncome, getIncomeById } from "../controllers/income.controller.js";
import { addExpense, deleteExpense, getExpense, getExpenseById } from "../controllers/expense.controller.js";
// import { ensureAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.post("/add-income", addIncome)
      .get("/get-income/:userId",  getIncome)
      .delete("/delete-income/:id", deleteIncome)
      .post("/add-expense", addExpense)
      .get("/get-expense/:userId", getExpense)
      .delete("/delete-expense/:id", deleteExpense)

export default router;