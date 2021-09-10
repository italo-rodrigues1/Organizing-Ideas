import React from 'react';

import { Container,FormModal } from './styles';

function FomModal() {


    
  return (
    <Container>
        <FormModal>
            <h1>Adicione os dados necessarios</h1>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Nome"/>
        </FormModal>
    </Container>
  );
}

export default FomModal;