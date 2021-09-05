import React,{useEffect,useState} from 'react';
import Logo from '../../img/favicon.svg';
import { Container,IdeasListWrapper,IdeasImg } from "./styles";
// import IdeasItem from '../IdeasItem/index';
import Ideas from '../Ideas/index';
import api from '../../services/api';

export default function IdeasList(){

    const [ideasCard,setIdeasCard] = useState([]);

    // useEffect(() => {
    //     api.get("ideias").then(({ data }) => {
    //         setIdeasCard(data.ideias);
    //     })
        
    // }, [])
    // console.log(ideasCard);

    useEffect(() => {
    
    
        const loadPosts = async () => {
    
          const reponse = await api.get("/ideias");
          
          setIdeasCard(reponse.data.ideias)

        }
       
        loadPosts();
    }, []);


    return(
        <Container>
            <IdeasImg>
                <h1>Ideas</h1>
                <img src={Logo} alt="logo" />
            </IdeasImg>

            {ideasCard && (
                <IdeasListWrapper>
            
                        {ideasCard.map((idea) => (
                            
                            <Ideas
                            key = {idea._id} 
                            id={idea._id}
                            title={idea.title}
                            link={idea.link}
                            goal={idea.goal}
                            info={idea.info}
                            emphasis={idea.emphasis}
                            />
                        
                        ))}
                    
                    {/* <IdeasItem /> */}
                </IdeasListWrapper>
            )}
                            
        </Container>
    );
}

