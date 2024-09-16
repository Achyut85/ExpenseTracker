import { useEffect } from "react";
import IncomeForm from "../components/IncomeForm";
import { useGlobalContext } from "../components/GlobalContext"
import Items from "../components/Items";
import { icons } from "../utils/icons";
const Incomes = ({userId}) => {
  const { incomes, getIncome, deleteIncome, totalIncome, loggedInId } = useGlobalContext();
  useEffect(() => {
    getIncome(loggedInId)
  }, [loggedInId])


  console.log(incomes)
  return (
    <div className="overflow-hidden h-full" >
      <div className="inner-layout">

        <h1 className="text-black font-bold">Incomes</h1>

        <h2 className="flex items-center gap-1 justify-center border-2 border-white bg-slate-100 shadow-md rounded-[15px] p-2 my-3 ">Total Income: <span className="flex items-center text-green-700 font-sans justify-center font-bold">
          <icons.rupee className="mt-1" />{totalIncome()}
          </span>
        </h2>
        <div className="flex gap-8">
          <div >
            <IncomeForm />
          </div>
          <div className="flex-1 overflow-y-auto h-[63.5vh] flex flex-col hide-scrollbar ">
            {

              incomes.map((income) => {
                const { id, title, amount, date, category, description } = income;
                return <Items
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor="bg-color-green"
                  date={date}
                  deleteItem={deleteIncome}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incomes