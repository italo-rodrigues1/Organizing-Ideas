import React,{useContext} from "react";
import ImgSocial from "../../img/favicon.svg";
import {Container} from "./styles";
import { AuthContext } from "../../context/userContext/AuthContext";

export default function IdeasItem({props}) {
  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <Container>
        <p>italo</p>
        <img src={ImgSocial}/>
      </Container>
    </>
  );
}