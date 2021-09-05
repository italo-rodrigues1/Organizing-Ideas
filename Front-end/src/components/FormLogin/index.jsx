import React,{useState} from "react";
import { Container,Form,FormDiv} from "./styles";
import axios from 'axios';
import GoogleLogin from 'react-google-login';

export default function LayoutLogin() {
  const [name,setName] = useState('');
  const [senha,setSenha] = useState('');
  const [email,setEmail] = useState('');
  const [token,setToken] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("localhost:3333/login",{name:name,password:senha,email:email})
    .then(response =>{
      console.log(response)
    })
    .catch(err => console.log(err) )
  }

    const handleLogin = async googleData => {
    const res = await axios.post("localhost:3333/login",{token: googleData.tokenId})
    const data = await res.json()
      // store returned user somehow
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