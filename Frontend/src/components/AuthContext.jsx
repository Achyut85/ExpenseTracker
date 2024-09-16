import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from "axios";

const AuthContext = createContext();

const AUTH_API_URL ="https://expensetracker-backend-74wt.onrender.com/api/auth/";

export  const AuthProvider  = ( { children }) =>{
    const [loggedInName, setLoggedInName] = useState('');
    const [loggedInId, setLoggedInId] = useState('');

    useEffect(() => {
        setLoggedInName(localStorage.getItem('userName'));
        setLoggedInId(localStorage.getItem('userId'));
    }, [loggedInId,loggedInName]);

    const setUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}signup`, user)
            return response;
        } catch (error) {
            return error.response;
        }
    }
    const getUser = async (user) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}signin`, user)
            return response;
        } catch (error) {
            return error.response;
        }
    }

    return <AuthContext.Provider value={{setUser,getUser,loggedInId,loggedInName,setLoggedInId,setLoggedInName}}>
         {children}
    </AuthContext.Provider>
}

export const useAuthContex = ( ) =>{
    return useContext(AuthContext);
}