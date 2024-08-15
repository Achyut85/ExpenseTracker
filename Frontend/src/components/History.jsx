import { useGlobalContext } from "./GlobalContext"
const History = ({recent}) => {
const {historyTransaction} = useGlobalContext();
const history = historyTransaction() || [];
const h = recent?history.slice(0,3):history
  return (
    <div className="flex flex-col gap-4 ">
        { recent && <h2 className="text-black font-bold">Recent History</h2>}

        {h.length===0 && <div> <h2>No Transaction</h2></div>}
        {
            
            h.map((item) =>{
                const {id, title, amount, type} = item
                return (

                    <div key={id} className="background-style flex justify-between items-center ">
                        
                        <p className={`${type==='expense'? 'text-red-700': 'text-green-700'}`}>
                            {title}
                        </p>

                        <p className={`${type==='expense'? 'text-red-700': 'text-green-700'}`}>
                            {type==='expense'?'-'+amount:'+'+amount}
                        </p>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default History