import React from 'react';
import Logo from '../../img/favicon.svg';
import { Container,IdeasListWrapper,IdeasImg } from "./styles";
// import IdeasItem from '../IdeasItem/index';
import Ideas from '../Ideas/index';

export default function IdeasList(){

    return(
        <Container>
            <IdeasImg>
                <h1>Ideas</h1>
                <img src={Logo} alt="logo" />
            </IdeasImg>
            <IdeasListWrapper>
                <Ideas 
                    id={1}
                    title="Criar app para melhorar o deslocamento de pessoas com deficiencia"
                    link="https://www.youtube.com/watch?v=x3Gn9axZfs0"
                    goal="ajudar na locomoção de pessoas com deficiencia"
                    info="app ou site,feature de acessibilidade"
                    emphasis={false}
                />
                <Ideas 
                    id={1}
                    title="Criar app para melhorar o deslocamento de pessoas com deficiencia"
                    link="https://www.youtube.com/watch?v=VYW4lGIZN5Y"
                    goal="ajudar na locomoção de pessoas com deficiencia"
                    info="app ou site,feature de acessibilidade"
                    emphasis={false}
                />
                <Ideas 
                    id={1}
                    title="Criar app para melhorar o deslocamento de pessoas com deficiencia"
                    link="https://www.youtube.com/watch?v=VYW4lGIZN5Y"
                    goal="ajudar na locomoção de pessoas com deficiencia"
                    info="app ou site,feature de acessibilidade"
                    emphasis={false}
                />
                {/* <IdeasItem /> */}
            </IdeasListWrapper>
        </Container>
    );
}