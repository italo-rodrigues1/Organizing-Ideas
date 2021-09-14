import React,{useState,useEffect,useContext} from "react";
import { Container,ImgLeft,Form,FormDiv,ContainerForm,LogoLogin} from "./styles";
// import ImgMain from "../../img/undraw_Instant_information_re_c5v5 (1).svg";
import ImgMain from "../../img/72259-team.gif";
import Logo from "../../img/Group 292 (1).svg";
import api  from '../../services/api';
import GoogleLogin from 'react-google-login';
import { Link, useHistory} from "react-router-dom";
import { AuthContext } from '../../context/userContext/AuthContext';

export default function LayoutLogin() {

  const { authenticated, handleLogin,setSenha,setEmail } = useContext(AuthContext);


 
  const history = useHistory();
  const [verificacaoGoogle,setVerificacaoGoogle] = useState([]);
 
  useEffect(() => {
   
    api.get("/login")
    .then((response) =>{
      
      setVerificacaoGoogle(response.data.userGoogle);
      
    })
    .catch(err => console.log(err) )

    

  }, []);

 


  const handleLoginGoogle =  (googleData) => {

    if(!verificacaoGoogle.includes(googleData.googleId) ) {
      history.push("/ideias");
      console.log("deu certo a verificação");
    }
    else{
      api.post("/login/google",{name:googleData.profileObj.name ,email:googleData.profileObj.email,googleId: googleData.googleId})
      .then(response =>{
        
        history.push("/ideias");
      }).catch(err => {
        
        alert("Usuário não cadastrado");
        console.log(err);
      })
      console.log("passou direto para o else");
    }

  }

  return (

    <Container>
      <LogoLogin>
        <img src={Logo} alt="logo" />
      </LogoLogin>
      <ImgLeft>
        <img src={ImgMain} alt="imagem do login" />
      </ImgLeft>
      <ContainerForm>
        <Form OnSubmit={handleLogin}>
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