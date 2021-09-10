import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 100%;
    width: 300px;
    background-color: #262626;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: relative;

    h1 {
        font-size: 25px;
        color: #E4EFFF;
        font-weight: 400;

        ::first-letter{
            color: #E3C005;
        }    
    }

    span{
        font-size: 10px;
        color:#ffff;
        position: absolute;
        bottom: 5px;
        a{
            color: #E3C005;
        }
    }

`;

export const AddCardButton = styled.button`

    border: none;
    border-radius: 100%;
    background-color: #3E3E3E;
    color: #ffff;
    font-size: 45px;
    cursor: pointer;
    text-align: center;
    width: 62px;
    height: 57px;
    margin: 114px 0;

    :hover {
        opacity: 0.8;
    }
   
`;