<<<<<<< HEAD
import { addExpenseData, deleteExpenseData, getExpenseData, getExpenseDataById } from "../models/expense.model.js";
import { errorHandler } from "../utils/error.js";
 export const addExpense = async(req, res, next) =>{
            const {title, category, description, date, amount} = req.body;
        try{
            if (!title || !category || !description || !date)
                return next(errorHandler(400, "All fields are required"));
            
            if (amount <= 0 || typeof amount !== 'number')
                return next(errorHandler(400, "Amount must be positive number"));

                const data = await addExpenseData(title, category, description, date, amount);
                console.log(data);
                res.status(201).json({ message: "Expense add successful" });

        }catch(error){
            next(error);
        }
}

export const getExpense = async (req, res, next) => {
        try{
            const data = await getExpenseData();
            if( typeof data === 'undefined')
                return next(errorHandler(400, "Data is not avilable"));
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
        if( typeof data === 'undefined')
            return next(errorHandler(400, "Data is not avilable"));
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
        if( typeof data === 'undefined')
        return next(errorHandler(400, "Data is not avilable"));
        console.log(data);
        res.status(201).json({ message: "Expense deleted successfully" });
    }catch(error){
        console.log(error);
        next(error);
    }
=======
import { addExpenseData, deleteExpenseData, getExpenseData, getExpenseDataById } from "../models/expense.model.js";
import { errorHandler } from "../utils/error.js";
 export const addExpense = async(req, res, next) =>{
            const {title, category, description, date, amount} = req.body;
        try{
            if (!title || !category || !description || !date)
                return next(errorHandler(400, "All fields are required"));
            
            if (amount <= 0 || typeof amount !== 'number')
                return next(errorHandler(400, "Amount must be positive number"));

                const data = await addExpenseData(title, category, description, date, amount);
                console.log(data);
                res.status(201).json({ message: "Expense add successful" });

        }catch(error){
            next(error);
        }
}

export const getExpense = async (req, res, next) => {
        try{
            const data = await getExpenseData();
            if( typeof data === 'undefined')
                return next(errorHandler(400, "Data is not avilable"));
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
        if( typeof data === 'undefined')
            return next(errorHandler(400, "Data is not avilable"));
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
        if( typeof data === 'undefined')
        return next(errorHandler(400, "Data is not avilable"));
        console.log(data);
        res.status(201).json({ message: "Expense deleted successfully" });
    }catch(error){
        console.log(error);
        next(error);
    }
>>>>>>> a6c0315 (Add files via upload)
}