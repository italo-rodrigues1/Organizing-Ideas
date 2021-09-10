import React,{useState,useEffect} from "react";
import { Container,ImgLeft,Form,FormDiv,ContainerForm} from "./styles";
import ImgMain from "../../img/undraw_Instant_information_re_c5v5 (1).svg";
import api  from '../../services/api';
import GoogleLogin from 'react-google-login';
import { Link, useHistory} from "react-router-dom";


export default function LayoutLogin() {

  // NO LOGIN SÓ FAÇO VERIFICAR SE O USUÁRIO ESTÁ EXISTE NO BANCO DE DADOS

  const [idIdeias,setIdIdeias] = useState('');
  const [senha,setSenha] = useState('');
  const [email,setEmail] = useState('');
  const [logout,setLogout] = useState(false);
  const history = useHistory();
  const [verificacaoGoogle,setVerificacaoGoogle] = useState([]);
  const [verificacaoLogin,setVerificacaoLogin] = useState([]);
 
  useEffect(() => {
   
    api.get("/login")
    .then((response) =>{
      
      setVerificacaoGoogle(response.data.userGoogle);
      
    })
    .catch(err => console.log(err) )

    

  }, []);

  console.log(verificacaoLogin)

  const handleSubmit = (e) => {
    e.preventDefault();  
    
    api.post("/login",({email:email,password:senha}))
    .then((response) =>{
      setVerificacaoLogin(response);
    })
    .catch(err => console.log(err) )


    if(!verificacaoLogin.includes(email) || verificacaoLogin.includes(senha) ) {
      history.push("/ideias");
      console.log("Usuario existe!!");
    }
    else{
      alert("Usuario não existe.Reveja os dados preenchidos!!")
      console.log("Usuario não existe");
    }

  }

  const handleLoginGoogle =  (googleData) => {

    if(!verificacaoGoogle.includes(googleData.googleId) ) {
      history.push("/ideias");
      console.log("deu certo a verificação");
    }
    else{
      api.post("/login/google",{name:googleData.profileObj.name ,email:googleData.profileObj.email,googleId: googleData.googleId})
      .then(response =>{
        setLogout(true);
        history.push("/ideias");
      }).catch(err => {
        setLogout(false);
        alert("Usuário não cadastrado");
        console.log(err);
      })
      console.log("passou direto para o else");
    }

  }

  return (

    <Container>
      <ImgLeft>
        <img src={ImgMain} alt="imagem do login" />
      </ImgLeft>
      <ContainerForm>
        <Form OnSubmit={handleSubmit}>
            <h1>Login</h1>
              <FormDiv>
                  <label htmlFor=""> 
                      <input type="email" onChange={(email)=> setEmail(email.target.value)}  required/>
                      <span>Digite seu Email...</span>
                  </label>
                  
                  <label htmlFor=""> 
                      <input type="password" onChange={(senha)=> setSenha(senha.target.value)} required/>
                      <span>Digite sua Senha...</span>
                  </label>
                  <span>Não tenho cadastro.<Link to="/registration">Click aqui!</Link></span>

                  <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Entre com a conta do Google"
                  onSuccess={handleLoginGoogle}
                  onFailure={handleLoginGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
            </FormDiv>
            <button type="submit">Entrar</button>
          </Form>
      </ContainerForm>
    </Container>

  );
}