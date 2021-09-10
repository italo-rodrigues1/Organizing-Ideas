import React,{useState,useEffect} from "react";
import { Container,ImgLeft,Form,FormDiv,ContainerForm} from "./styles";
import ImgMain from "../../img/undraw_Instant_information_re_c5v5 (1).svg";
import api  from '../../services/api';
import GoogleLogin from 'react-google-login';
import { Link, useHistory} from "react-router-dom";


export default function LayoutCadastro() {

  const [senha,setSenha] = useState('');
  const [email,setEmail] = useState('');
  const [nome,setNome] = useState('');
  const [logout,setLogout] = useState(false);
  const history = useHistory();
  const [verificacaoGoogle,setVerificacaoGoogle] = useState([]);
  const [verificacaoLogin,setVerificacaoLogin] = useState([]);
 
  useEffect(() => {
   
    api.get("/login")
    .then((response) =>{
      
      setVerificacaoGoogle(response.data.userGoogle);
      setVerificacaoLogin(response.data.user);
    })
    .catch(err => console.log(err) )

  }, []);

  console.log(verificacaoLogin)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!verificacaoLogin.includes(email) || verificacaoLogin.includes(senha) ) {
      history.push("/ideias");
      console.log("Usuario existe!!");
    }
    else{
      alert("Usuario não existe.Reveja os dados preenchidos!!")
      console.log("Usuario não existe");
    }

  }

  const handleLogin =  (googleData) => {

    if(!verificacaoGoogle.includes(googleData.googleId) ) {
      history.push("/ideias");
      console.log("deu certo a verificação");
    }
    else{
      api.post("/login",{name:googleData.profileObj.name ,email:googleData.profileObj.email,googleId: googleData.googleId})
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
            <h1>Cadastro</h1>
              <FormDiv>

                  <label htmlFor=""> 
                      <input type="text" onChange={(nome)=> setNome(nome.target.value)}  required/>
                      <span>Digite seu Nome...</span>
                  </label>
                  
                  <label htmlFor=""> 
                      <input type="email" onChange={(email)=> setEmail(email.target.value)}  required/>
                      <span>Digite seu Email...</span>
                  </label>
                  
                  <label htmlFor=""> 
                      <input type="password" onChange={(senha)=> setSenha(senha.target.value)} required/>
                      <span>Digite sua Senha...</span>
                  </label>
                  <span>Já tenho cadastro.<Link to="/">Click aqui!</Link></span>

                  {/* <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Entre com a conta do Google"
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                  /> */}
            </FormDiv>
            <button type="submit">Cadastrar</button>
          </Form>
      </ContainerForm>
    </Container>

  );
}