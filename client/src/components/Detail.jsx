import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions/index'
import { useEffect } from 'react'
import styled from 'styled-components'
import diets from '../assets/diets.png'
import rating from '../assets/rating.png'
import pressure from '../assets/pressure.png'
import contract from '../assets/contract.png'
import steps from '../assets/steps.png'
import dinner from '../assets/dinner.png'


const Container = styled.div`
   height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 18px; 


    /* height: 100vh;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto auto auto auto auto auto auto;
    grid-template-areas: 
        ". N N N N N N N N N N ."
        ". B B B B B B B B B B ."
        "P P P P P P P P P P P P"
        ". F R R R R R R R R R ."
        "FO FO FO FO FO FO FO FO FO FO FO FO"
        ; */

`

const DetailContainer = styled.div`
     width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 10px;

`
const ContenidoPr = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
const Img = styled.img`
    margin-left: 25px;
    width: 100%;
    margin-top: 25px;

`
const Image = styled.div`
     width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`
const Summary = styled.span`
     cursor: default;
    a {
        text-decoration: none;
        color: black;
        pointer-events: none;
    }

`
const DivSummary = styled.p`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    word-break: break-word;

`

const DivDiets = styled.div`
    width: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-transform: capitalize;

`
const DivH2 = styled.div`
    width: 55%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

`
const DivTitles = styled.div`
    align-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;

`
const DivTitles1 = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;

`
const DivMedio = styled.div`
    margin-left: 100px;
    height: auto;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;

`
const DivMedio2 = styled.div`
    padding-left: 20px;
    height: auto;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center

`
const Central = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
`
const H4 = styled.h4`
    margin: 3px;
    font-size: 25px;
`;

const Back = styled(Link)`
border-style:dotted;
text-decoration: none;
text-transform:capitalize;


`
export default function Detail(props){
    // console.log(props)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])
    
    const myRecipe = useSelector((state)=> state.detail)

    const funcDescription = () => {
        return  {__html: myRecipe.summary};
    }

    return (
        <Container>
            {
                myRecipe.length === 0 ?
                <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="Loading..." />
                :
                <DetailContainer>
                        <h1>{myRecipe[0].title}</h1>
                    <ContenidoPr>  
                        <DivH2>
                            <br />
                            <DivSummary>
                                <DivTitles>
                                    <img src={contract} width='30px' height='30px' alt="Img summary" /><H4> Summary:</H4></DivTitles>
                                    {myRecipe[0].summary}
                                <Summary dangerouslySetInnerHTML={funcDescription()} />
                            </DivSummary>
                        </DivH2>  

                        <Image>
                            <Img src={myRecipe[0].image} alt="img not found"/>
                        </Image>
                        
                        
                    </ContenidoPr>
                    <br/>
                    <Central>
                    
                        <DivMedio>
                        
                            <DivTitles><img src={rating}width='30px' height='30px' alt="Img score" /><H4>Score:</H4><p>{myRecipe[0].spoonacularScore}</p></DivTitles>

                            <DivDiets>
                            <DivTitles><img src={diets} width='30px' height='30px' alt="Img dieta" /><H4>Diets:</H4> </DivTitles>                     
                                {myRecipe[0].createdDb? <ul>{myRecipe[0].diets.map(d => <li>{d.name}</li>)}</ul>:
                                <ul>{myRecipe[0].diets.map(d => <p>{d}</p>)}</ul>}
                            
                            </DivDiets>  
                        </DivMedio>
                        <DivMedio2>
                            <DivTitles><img src={pressure} width='30px' height='30px' alt="Img health" /><H4>Health Score: </H4><p>{myRecipe[0].healthScore}</p></DivTitles>

                            <DivTitles><img src={dinner} width='30px' height='30px' alt="Img dish" /><H4>Type of dish:</H4></DivTitles>{myRecipe[0].dishTypes ? <ul>{myRecipe[0].dishTypes.map(d => <p>{d}</p>)}</ul> : "n/a"}
                    
                        </DivMedio2>
                    </Central>
                    <DivSummary>
                    <DivTitles><img src={steps} width='30px' height='30px' alt="Img score" /><H4>Instructions: </H4></DivTitles><p>
                        {(myRecipe[0].analyzedInstructions)}
                        </p>
                    </DivSummary>
                    {<Back to='/home'>Go back</Back>}
                </DetailContainer>
            }
        </Container>
    )
}