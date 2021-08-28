import React from "react";
import { Container,VideoFrame,TitleContainer,ButtonContainer,Button} from "../Ideas/styles";

import {FiTrash,FiStar,FiEdit} from "react-icons/fi";

export default function Ideas({id,title,link,goal,info,emphasis}){
    return (
        
        <Container>
            <VideoFrame>
                <iframe  src={link} title="YouTube video player" controller="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </VideoFrame>

            <TitleContainer>
                <h2>{title}</h2>
                <h3>{goal}</h3>
                <h3>{info}</h3>
            </TitleContainer>
            
            <ButtonContainer>
                <Button emphasis={emphasis}>
                    <FiStar/>
                </Button>
                <Button >
                    <FiEdit/>
                </Button>
                <Button >
                    <FiTrash/>
                </Button>
            </ButtonContainer>
        </Container>
        
    );
}