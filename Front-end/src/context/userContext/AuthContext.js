import React,{createContext,useState,useEffect} from 'react'
import {  Redirect  } from "react-router";
import useAuth from '../../hooks/useAuth';

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const {authenticated,handleLogin,handleLogout,senha,setSenha,email,setEmail} = useAuth();

    return (
        <AuthContext.Provider value={{authenticated,handleLogin,handleLogout,setSenha,setEmail}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider};