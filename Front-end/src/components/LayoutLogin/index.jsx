import React from "react";
import { Container,ImgLeft} from "./styles";
import ImgMain from "../../img/undraw_Instant_information_re_c5v5 (1).svg";
import FormLogin from "../FormLogin";

export default function LayoutLogin() {
  
  return (

    <Container>
      <ImgLeft>
        <img src={ImgMain} alt="imagem do login" />
      </ImgLeft>
      <FormLogin/>
    </Container>

  );
}