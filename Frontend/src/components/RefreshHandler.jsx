import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const RefreshHandler = ({setIsAuthenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        if(localStorage.getItem('token')){
            setIsAuthenticated(true);
            if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup'){
                navigate('/main', {replace: false});
            }
        }
    },[location, navigate, setIsAuthenticated])
  return (
    null
  )
}

export default RefreshHandler