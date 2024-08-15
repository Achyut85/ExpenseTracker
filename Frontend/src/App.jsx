
import { useMemo } from "react"
import MainLayout from "./components/MainLayout"
import Orb from "./components/Orb"


const App = () => {
  
  const orbMemo = useMemo(()=>{
    return <Orb/>;
  },[])
  
 
  return (
    <div className="h-[100vh] bg-stone-200 relative">
      {orbMemo}
      <MainLayout/>
    </div>
  )
}

export default App