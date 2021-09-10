import React from "react";
import ImgSocial from "../../img/favicon.svg";
import {Container} from "./styles";

export default function IdeasItem({props}) {
  return (
    <>
      <Container>
        <p>italo</p>
        <img src={ImgSocial}/>
      </Container>
    </>
  );
}