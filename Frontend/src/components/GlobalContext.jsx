import { createContext, useContext, useState } from "react"
import axios from "axios";
import { useAuthContex } from "./AuthContext";
const GlobalContext = createContext();

const API_URL = "https://expensetracker-backend-74wt.onrender.com/api/tr/";

 
export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const {loggedInId,loggedInName} = useAuthContex();

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${API_URL}add-income`, income)
            getIncome(loggedInId);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const getIncome = async (userId) => {
        try {
            const response = await axios.get(`${API_URL}get-income/${userId}`)
            setIncomes(response.data);
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    const deleteIncome = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}delete-income/${id}`)
            getIncome(loggedInId)
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total = total + parseFloat(income.amount)
        })
        return total
    }

    const getExpense = async (userId) => {
        try {
            const response = await axios.get(`${API_URL}get-expense/${userId}`)
            setExpenses(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${API_URL}add-expense`, expense)
            getExpense(loggedInId)
        } catch (error) {
            setError(error.response.data.message)
        }
    }


    const deleteExpense = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}delete-expense/${id}`)
            getExpense(loggedInId)
        } catch (error) {
            setError(error.response.data.message)
        }
    }
    const totalExpense = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total = total + parseFloat(expense.amount)
        })
        return total
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense();
    }

    const historyTransaction = () => {
        const prevTransaction = [
            ...expenses,
            ...incomes,

        ]
        return prevTransaction.sort((a, b) => (new Date(b.date) - new Date(a.date)))

    }





    return (
        <GlobalContext.Provider value={{ addIncome, getIncome, incomes, deleteIncome, totalIncome, addExpense, getExpense, expenses, deleteExpense, totalExpense, totalBalance, historyTransaction, setError, error,loggedInId,loggedInName }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}