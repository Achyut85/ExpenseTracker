<<<<<<< HEAD
import express from "express";
import { addIncome, deleteIncome, getIncome, getIncomeById } from "../controllers/income.controller.js";
import { addExpense, deleteExpense, getExpense, getExpenseById } from "../controllers/expense.controller.js";

const router = express.Router();

router.post("/add-income", addIncome)
      .get("/get-income", getIncome)
      .get("/get-income/:id", getIncomeById)
      .delete("/delete-income/:id",deleteIncome)
      .post("/add-expense", addExpense)
      .get("/get-expense", getExpense)
      .get("/get-expense/:id", getExpenseById)
      .delete("/delete-expense/:id",deleteExpense)


=======
import express from "express";
import { addIncome, deleteIncome, getIncome, getIncomeById } from "../controllers/income.controller.js";
import { addExpense, deleteExpense, getExpense, getExpenseById } from "../controllers/expense.controller.js";

const router = express.Router();

router.post("/add-income", addIncome)
      .get("/get-income", getIncome)
      .get("/get-income/:id", getIncomeById)
      .delete("/delete-income/:id",deleteIncome)
      .post("/add-expense", addExpense)
      .get("/get-expense", getExpense)
      .get("/get-expense/:id", getExpenseById)
      .delete("/delete-expense/:id",deleteExpense)


>>>>>>> a6c0315 (Add files via upload)
export default router;