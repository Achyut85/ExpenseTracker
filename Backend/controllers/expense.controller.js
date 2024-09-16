import { addExpenseData, deleteExpenseData, getExpenseData, getExpenseDataById } from "../models/expense.model.js";
import { errorHandler } from "../utils/error.js";
 export const addExpense = async(req, res, next) =>{
            const {title, category, description, date, amount, user_id} = req.body;
        try{
            if (!title || !category || !description || !date)
                return next(errorHandler(400, "All fields are required"));
            
            if (amount <= 0 || typeof amount !== 'number')
                return next(errorHandler(400, "Amount must be positive number"));

                const data = await addExpenseData(title, category, description, date, amount, user_id);
                console.log(data);
                res.status(201).json({ message: "Expense add successful" });

        }catch(error){
            next(error);
        }
}

export const getExpense = async (req, res, next) => {
    const userId = req.params.userId;
        try{
            const data = await getExpenseData(userId);
            res.json(data)
        }catch(error){
            console.log(error);
            next(error);
        }
}

export const getExpenseById = async (req, res, next) => {
    const id = req.params.id;
    try{
        const data = await getExpenseDataById(id);
        console.log(data);
        res.status(201).json({ message: "Get Expense by id successfully" });
    

    }catch(error){
        console.log(error);
        next(error);
    }
}

export const deleteExpense = async (req, res, next) => {
    const id = req.params.id;
    try{
        const data = await deleteExpenseData(id);

        console.log(data);
        res.status(201).json({ message: "Expense deleted successfully" });
    }catch(error){
        console.log(error);
        next(error);
    }
}