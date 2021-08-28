import React from "react";
import {AiOutlinePlus} from "react-icons/ai"

import { Container,AddVideoButton } from "./styles";

export default function Header() {
  // const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  // const { setEditingVideo } = useContext(EditingVideoContext);

  // function handleAdd() {
  //   setTitle("");
  //   setLink("");
  //   setEditingVideo(false);
  //   openFormModal();
  // }

  return (

    <Container>
      <h1>Organizing</h1>
      <AddVideoButton> 
        <AiOutlinePlus/> 
      </AddVideoButton>
      <span>Todos os direitos reservados<a href="https://www.instagram.com/italorodrigues_1/" target="_blank" rel="noopener noreferrer">@italorodrigues_1</a></span>
    </Container>

  );
}