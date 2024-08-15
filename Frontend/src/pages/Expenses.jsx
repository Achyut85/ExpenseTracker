<<<<<<< HEAD
import { useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useGlobalContext } from "../components/GlobalContext"
import Items from "../components/Items";
import { icons } from "../utils/icons";
const Expenses = () => {
  const {  expenses, getExpense, deleteExpense, totalExpense } = useGlobalContext();
  useEffect(() => {
    getExpense()
  }, [])


  return (
    <div className="overflow-hidden h-full" >
      <div className="inner-layout">
        <h1 className="text-black font-bold">Expenses</h1>
        <h2 className="flex items-center gap-1 justify-center border-2 border-white bg-slate-100 shadow-md rounded-[15px] p-2 my-3 ">Total Expense: <span className="flex items-center text-red-700 font-sans justify-center font-bold"><icons.rupee className="mt-1" />{totalExpense()}</span></h2>
        <div className="flex gap-8">
          <div >
            <ExpenseForm />
          </div>
          <div className="flex-1 overflow-y-auto h-[63.5vh] flex flex-col hide-scrollbar ">
            {

              expenses.map((expense) => {
                const { id, title, amount, date, category, description } = expense;
                return <Items
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor="bg-red-700"
                  date={date}
                  deleteItem={deleteExpense}

                />
              })
              
            }
          </div>
        </div>
      </div>
    </div>
  )
}

=======
import { useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useGlobalContext } from "../components/GlobalContext"
import Items from "../components/Items";
import { icons } from "../utils/icons";
const Expenses = () => {
  const {  expenses, getExpense, deleteExpense, totalExpense } = useGlobalContext();
  useEffect(() => {
    getExpense()
  }, [])


  return (
    <div className="overflow-hidden h-full" >
      <div className="inner-layout">
        <h1 className="text-black font-bold">Expenses</h1>
        <h2 className="flex items-center gap-1 justify-center border-2 border-white bg-slate-100 shadow-md rounded-[15px] p-2 my-3 ">Total Expense: <span className="flex items-center text-red-700 font-sans justify-center font-bold"><icons.rupee className="mt-1" />{totalExpense()}</span></h2>
        <div className="flex gap-8">
          <div >
            <ExpenseForm />
          </div>
          <div className="flex-1 overflow-y-auto h-[63.5vh] flex flex-col hide-scrollbar ">
            {

              expenses.map((expense) => {
                const { id, title, amount, date, category, description } = expense;
                return <Items
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor="bg-red-700"
                  date={date}
                  deleteItem={deleteExpense}

                />
              })
              
            }
          </div>
        </div>
      </div>
    </div>
  )
}

>>>>>>> a6c0315 (Add files via upload)
export default Expenses