
import { useMemo } from "react"
import MainLayout from "./components/MainLayout"
import Orb from "./components/Orb"
import { Navigate, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { useState } from "react"
import RefreshHandler from "./components/RefreshHandler"
const App = () => {
  
  const orbMemo = useMemo(()=>{
    return <Orb/>;
  },[])
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element: <Navigate to="/signin" />
  }
  return (
    
    <div className="h-[100vh] bg-stone-200 relative">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      {orbMemo}
      <Routes>
       <Route path="/" element={<Navigate to="/signin"/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
       <Route path="/main" element={<PrivateRoute element={<MainLayout/>}/>}/>
      </Routes>
    </div>
  )
}

export default App