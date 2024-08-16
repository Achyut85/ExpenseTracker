import { Chart as ChartJs ,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Line } from "react-chartjs-2"
import { useGlobalContext } from "./GlobalContext"
import dateformat from "../utils/dateformat"
ChartJs.register(
    CategoryScale,
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    ArcElement
)

const Chart = () => {
    const {incomes, expenses} = useGlobalContext();

 
    const allDates = [
        ...incomes.map(income => income.date),
        ...expenses.map(expense => expense.date)
    ].map(date => dateformat(date));

    const uniqueDates = Array.from(new Set(allDates));
    const data = {
        labels: uniqueDates,
        datasets:[
            {
                label: "Incomes", 
                data: [
                    ...incomes.map((income) =>{
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor:"green"
               
            },
            {
            label: "Expenses", 
                data: [
                    ...expenses.map((expense) =>{
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor:"red"
               
                
            },

        ]
        
    }
  return (
    <div className="h-full background-style"><Line data={data}/></div>
  )
}

export default Chart