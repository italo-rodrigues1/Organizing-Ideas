import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    justify-content: start;
    align-items: flex-start;
    position: relative;
    padding: 0 10px;
    
   
`; 

export const IdeasListWrapper = styled.ul`
    display:flex;
    justify-content: center;
    justify-self: center;
    width: 100%;
    max-width: 1000px;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;               
    }
`; 

export const IdeasImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    h1{
        font-size: 25px;
        color: #E4EFFF;
        font-weight: 400;
        
        
        ::first-letter{
            color: #E3C005;
        }      
    }

    img{
        width: 40%;
        object-fit: cover;
    }  
`; 