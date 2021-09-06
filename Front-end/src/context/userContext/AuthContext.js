import React,{createContext,useState,useEffect} from 'react'
import {  Redirect  } from "react-router";
import api  from '../../services/api';


export const AuthContext = createContext();

function AuthContextProvider(children) {
    // const [isAuthenticated,setIsAuthenticated] = useState(false);
    // const [user,setUser] = useState({});   
    const [name,setName] = useState('');
    const [senha,setSenha] = useState('');
    // const [email,setEmail] = useState('');
    const [logout,setLogout] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        api.post("/login",{name:name,password:senha})
        .then(response =>{
        console.log(response)
        })
        .catch(err => console.log(err) )
    }
    
    const handleLogin =  (googleData) => {

        api.post("/login",{name:googleData.profileObj.name ,email:googleData.profileObj.email,googleId: googleData.googleId})
        .then(response =>{
          setLogout(true);
          history.push("/ideias")
        }).catch(err => {
          console.log(err)
        })
    
        // if(logout === true){
        //   return;
        // }
        // else{
        //   return <Redirect to="/login" />
        // }
    }

    const value = { handleLogin ,handleSubmit,name,senha,logout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;