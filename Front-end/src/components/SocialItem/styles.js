import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100px;
    width: 130px;
    align-items: center;
    img{
        width:40px;
        height:40px;
        border-radius: 30px;
        background:#000;
    }

    p{
        color: #fff;
        margin-right: 10px;
        font-size: 16px;
        text-transform: uppercase;
    }
`;