import React,{useState,useEffect} from "react";
import { Container,Form,FormDiv} from "./styles";
import api  from '../../services/api';
import GoogleLogin from 'react-google-login';
import { Link, useHistory} from "react-router-dom";
import {  Redirect  } from "react-router";

export default function LayoutLogin() {
  const [name,setName] = useState('');
  const [senha,setSenha] = useState('');
  // const [email,setEmail] = useState('');
  const [logout,setLogout] = useState(false);
  const history = useHistory();

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
      setLogout(false);
      history.push("/login")
      
      console.log(err)
    
    })

    // if(logout === true){
    //   return;
    // }
    // else{
    //   return <Redirect to="/login" />
    // }
  }
 
  return (

    <Container>
        <Form OnSubmit={handleSubmit}>
          <h1>Login</h1>
            <FormDiv>
                <label htmlFor=""> 
                    <input type="text" onChange={(nome)=> setName(nome.target.value)}  required/>
                    <span>Digite seu nome...</span>
                </label>
                
                <label htmlFor=""> 
                    <input type="password" onChange={(senha)=> setSenha(senha.target.value)} required/>
                    <span>Digite sua senha...</span>
                </label>
                <span>Não tenho cadastro.<Link to="/registration">Click aqui!</Link></span>

                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Entre com a conta do Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
                />
           </FormDiv>
          <button>Entrar</button>
        </Form>
    </Container>

  );

  
}