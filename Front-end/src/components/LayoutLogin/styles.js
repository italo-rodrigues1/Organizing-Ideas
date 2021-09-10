import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #262626;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const ContainerForm = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    background-color: #262626;
    position: relative;
    align-items: center;
    justify-content: center;

    @media(max-width: 750px) {
        width: 100%;
        padding: 10px;
    }
`;

export const ImgLeft = styled.div`

    width: 50%;
    height: 100%;
    background: #ffcc33;
    
    img{
        width: 100%;
        height: 100%;
       
    }

    @media(max-width: 750px) {
        display: none;
    }
`;

export const Form = styled.form`
    width: 400px; 
    height: 400px;
    border-radius: 10px;
    background: #fff;
    box-shadow: -4px 7px #6b6a6a5c;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h1{
        color: #393939;
        position: relative;

        &::before{
            content: "";
            width:50px;
            height:5px;
            background: #E3C005;
            position: absolute;
            bottom: -3px;
            border-radius: 10px;

        }
    }

  

    button{
        width: 157px;
        height: 40px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        margin: 0 auto;
        box-shadow: 1px 4px #1111110d;
        background: #E3C005;
        
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const FormDiv = styled.div`
    margin-top:20px;

    label{
        position: relative;

        input{
            outline: none;
            border: none;
            width: 100%;
            padding: 10px;
            font-size:24px;
            color:#fff;
            background: #111;
            border-radius: 10px;
            margin: 15px 0;
        }
        span{
            position: absolute;
            top: -7px;
            left: 15px;
            font-size: 20px;
            letter-spacing:0.05em;
            pointer-events: none;
            font-weight:600;
            transition: .4s;
            color: #ffffffd4;
        }

        input:focus + span,
        input:valid + span{
            top: -30px;
            left: 10px;
            font-size: 18px;
            padding: 0 10px;
            background: #111;
            border-radius: 10px;
        }


       

    }

    button{
        width: 280px;
        margin: 16px 44px;

        > div{
            padding: 0 10px!important;
        }
    }

`;
