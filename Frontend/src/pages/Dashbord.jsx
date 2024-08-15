<<<<<<< HEAD
import Chart from "../components/Chart"
import { icons } from "../utils/icons"
import { useGlobalContext } from "../components/GlobalContext"
import { useEffect } from "react"
import History from "../components/History"
const Dashbord = () => {
  const { totalIncome, totalExpense, totalBalance, getExpense, getIncome, incomes, expenses } = useGlobalContext();
  useEffect(() => {
    getIncome()
    getExpense()
  }, [])


  return (
    <div className=" h-full overflow-auto hide-scrollbar ">
      <div className="inner-layout ">
        <h1 className="text-black font-bold mb-3">All Transaction</h1>
        <div className="grid grid-cols-5 gap-6 ">
          {/* stats-con */}
          <div className="col-span-3 h-96">
            {/* chart-con */}
            <Chart />
            <div className="grid grid-cols-4 gap-6 mt-6 mb-6">
              {/* amount-con */}
              <div className="col-span-2 background-style">
                {/* income */}
                <h2>Total Income</h2>
                <p className="flex items-center text-green-700">
                  <icons.rupee /> {totalIncome()}
                </p>
              </div>

              <div className="col-span-2 background-style">
                {/* expense */}
                <h2>Total Expense</h2>
                <p className="flex items-center text-red-700">
                  <icons.rupee /> {totalExpense()}
                </p>
              </div>

              <div className="background-style flex flex-col items-center justify-center col-span-4 ">
                {/* balance */}
                <h2>Total Balance</h2>
                <p className={`flex items-center ${totalBalance()>=0?'text-green-700':'text-red-700'}`}>
                  <icons.rupee /> {totalBalance()}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2  ">
            <History recent />
            <h2 className="my-4 flex items-center justify-between ">Min <span className="text-2xl">Salary</span>Max</h2>
            <div  className="background-style flex items-center justify-between ">
              <p>
                {
                  
                   incomes.length===0 ?'0':Math.min(...incomes.map(item => item.amount))
                }
              </p>
              <p>
                {
                  incomes.length===0 ?'0':Math.max(...incomes.map(item => item.amount))
                }
              </p>
            </div>

            <h2 className="my-4 flex items-center justify-between">Min <span className="text-2xl">Expense</span>Max</h2>
            <div className="background-style flex items-center justify-between">
              <p>
                {
                  expenses.length===0 ?'0':Math.min(...expenses.map(item => item.amount))
                }
              </p>
              <p>
                {
                   expenses.length===0 ?'0':Math.max(...expenses.map(item => item.amount))
                }
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Dashbord
=======
import Chart from "../components/Chart"
import { icons } from "../utils/icons"
import { useGlobalContext } from "../components/GlobalContext"
import { useEffect } from "react"
import History from "../components/History"
const Dashbord = () => {
  const { totalIncome, totalExpense, totalBalance, getExpense, getIncome, incomes, expenses } = useGlobalContext();
  useEffect(() => {
    getIncome()
    getExpense()
  }, [])


  return (
    <div className=" h-full overflow-auto hide-scrollbar ">
      <div className="inner-layout ">
        <h1 className="text-black font-bold mb-3">All Transaction</h1>
        <div className="grid grid-cols-5 gap-6 ">
          {/* stats-con */}
          <div className="col-span-3 h-96">
            {/* chart-con */}
            <Chart />
            <div className="grid grid-cols-4 gap-6 mt-6 mb-6">
              {/* amount-con */}
              <div className="col-span-2 background-style">
                {/* income */}
                <h2>Total Income</h2>
                <p className="flex items-center text-green-700">
                  <icons.rupee /> {totalIncome()}
                </p>
              </div>

              <div className="col-span-2 background-style">
                {/* expense */}
                <h2>Total Expense</h2>
                <p className="flex items-center text-red-700">
                  <icons.rupee /> {totalExpense()}
                </p>
              </div>

              <div className="background-style flex flex-col items-center justify-center col-span-4 ">
                {/* balance */}
                <h2>Total Balance</h2>
                <p className={`flex items-center ${totalBalance()>=0?'text-green-700':'text-red-700'}`}>
                  <icons.rupee /> {totalBalance()}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2  ">
            <History recent />
            <h2 className="my-4 flex items-center justify-between ">Min <span className="text-2xl">Salary</span>Max</h2>
            <div  className="background-style flex items-center justify-between ">
              <p>
                {
                  
                   incomes.length===0 ?'0':Math.min(...incomes.map(item => item.amount))
                }
              </p>
              <p>
                {
                  incomes.length===0 ?'0':Math.max(...incomes.map(item => item.amount))
                }
              </p>
            </div>

            <h2 className="my-4 flex items-center justify-between">Min <span className="text-2xl">Expense</span>Max</h2>
            <div className="background-style flex items-center justify-between">
              <p>
                {
                  expenses.length===0 ?'0':Math.min(...expenses.map(item => item.amount))
                }
              </p>
              <p>
                {
                   expenses.length===0 ?'0':Math.max(...expenses.map(item => item.amount))
                }
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Dashbord
>>>>>>> a6c0315 (Add files via upload)
