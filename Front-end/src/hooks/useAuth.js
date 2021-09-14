import {useState,useEffect} from 'react';
import api  from '../services/api';
import { useHistory} from "react-router-dom";

export default function useAuth(){
    const [authenticated,setAuthenticated] = useState(false);	
    const history = useHistory();
    const [senha,setSenha] = useState('');
    const [email,setEmail] = useState('');

    async function handleLogin(){
       const { data:{token} } = await  api.post('/login',{email:email,password:senha});

       localStorage.setItem('token',JSON.stringify(token));

       api.defaults.headers.Authorization = `Bearer ${token}`;

       setAuthenticated(true);
       history.push("/ideias");
    }
    
    function handleLogout(){
        setAuthenticated(false)
        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;
        history.push("/");
    }


    return { authenticated,handleLogin,handleLogout,senha,setSenha,email,setEmail };
}