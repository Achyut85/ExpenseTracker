import { addIncomeData, deleteIncomeData, getIncomeData, getIncomeDataById } from "../models/income.model.js";
import { errorHandler } from "../utils/error.js";
 export const addIncome = async(req, res, next) =>{
            const {title, category, description, date, amount, user_id} = req.body;
           
        try{
            if (!title || !category || !description || !date)
                return next(errorHandler(400, "All fields are required"));
            
            if (amount <= 0 || typeof amount !== 'number')
                return next(errorHandler(400, "Amount must be positive number"));

                const data = await addIncomeData(title, category, description, date, amount, user_id);
              
                res.status(201).json({ message: "Income add successful" });

        }catch(error){
            next(error);
        }
}

export const getIncome = async (req, res, next) => {
    const userId = req.params.userId;
        try{
            const data = await getIncomeData(userId);
        
            console.log(data);
            res.json(data);
              
        }catch(error){
            console.log(error);
            next(error);
        }
}

export const getIncomeById = async (req, res, next) => {
    const id = req.params.id;
    try{
        const data = await getIncomeDataById(id);
       
        console.log(data);
        res.status(201).json({ message: "Get income by id successfully" });
    

    }catch(error){
        console.log(error);
        next(error);
    }
}

export const deleteIncome = async (req, res, next) => {
    const id = req.params.id;
    try{
        const data = await deleteIncomeData(id);
    
        console.log(data);
        res.status(201).json({ message: "Income deleted successfully" });
    }catch(error){
        console.log(error);
        next(error);
    }
}