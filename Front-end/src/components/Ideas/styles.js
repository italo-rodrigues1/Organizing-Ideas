import styled from "styled-components";

export const Container = styled.li`
    width:100%;
    max-width: 1000px;
    height:220px;
    margin: 0 auto;
    padding-left:10px;
    display: flex;
    background: #262626;
    border-radius: 10px;
    justify-content: space-between;
    transition: all 0.3s linear;
    &:hover{
        box-shadow:-1px 5px #ffffff2b;
    }
`;

export const VideoFrame = styled.div`
   width: 300px;
   height: 100%;
   padding: 10px 0;

   iframe{
       width: 100%;
       height: 100%;
       border: none;
       border-radius: 10px;
   }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    color: #fff;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 7px;               
    }

    ::-webkit-scrollbar-track {
        background: none;        
    }

    ::-webkit-scrollbar-thumb {
        background-color:#E3C005;      
        border-radius: 20px;       
        
    }

    h2{
        margin: 10px 0; 
    }
    h3{
        margin: 10px 0;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

  
`;

export const Button = styled.button`
    padding: 10px;
    background: #262626;
    border:none;
    cursor: pointer;

    &:nth-child(4){
        width: 100px;
        border-radius: 0 0 10px 0;
        background: #fff;
        height: 25%;
        font-size: 20px;
        a{
            color: #111;

        }
    }

    svg{
        color: ${(props)=>(props.emphasis ? "#E3C005" : "#fff")};
        font-size: 25px;
    }

    &:hover{
        opacity: 0.8;
    }
`;