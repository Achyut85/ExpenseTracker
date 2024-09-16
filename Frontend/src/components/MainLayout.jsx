import { useEffect, useState } from "react"
import Nav from "./Nav"
import Dashbord  from "../pages/Dashbord";
import Incomes from "../pages/Incomes";
import Expenses from "../pages/Expenses";
import Transaction from "../pages/Transaction";

const MainLayout = () => {
  const [active, setActive] = useState(1);
  const displayData = () =>{
    switch(active){
      case 1: 
      return <Dashbord />
      case 2:
        return <Transaction/>
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashbord />
    }
  }
  return (
    <div className="p-8 h-full flex gap-8 max-md:flex-col">
      <Nav
        active={active}
        setActive={setActive}
      />
      <main className="flex-1 border-[3px] border-white backdrop-blur-md rounded-[32px]  bg-slate-100 overflow-auto overflow-x-hidden ">
        {displayData()}
      </main>
    </div>
  )
}

export default MainLayout