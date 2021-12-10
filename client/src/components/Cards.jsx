import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Link, NavLink } from 'react-router-dom';

//Styled-Components

const Body = styled.div`
    
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem 1rem;
    border: 3px solid transparent;
    `;

const Span = styled.span`
    margin: 100px;
    font-size: 30px;
    font-family: sans-serif;
    border: 3px solid blue;
`;

//----------------------------------------

export default function Cards({currentRecipes, id}){
        // return (
       
    //     <Body>
    //         {   currentRecipes && typeof currentRecipes === 'object'
    //             ?   currentRecipes.map(r => <Card 
    //                     image={r.image}
    //                     title={r.title}
    //                     diets={r.diets.name}
    //                     spoonacularScore={r.spoonacularScore}
    //                     key={r.id}
    //                 />)
    //             :   <Span>No se encontraron recetas 🥱</Span>
    //         }
    //     </Body>
    // )
    return (
        <Body>
            { currentRecipes && typeof currentRecipes === 'object'?
            currentRecipes.map(c=> <Card                         
                    image={c.image} 
                    title={c.title} 
                            // diets={c.diets && c.diets[0].name}
                    diets={c.diets?.map(function(diets) {
                        if(typeof diets === 'object')
                            {return (<li>{diets.name}</li>)}
                        else {return(<li>{diets}</li>)}
                            })}
                    spoonacularScore={c.spoonacularScore} 
                    id={c.id}/>
                ) : <Span>Not recipes found! Sorry try again!</Span>
            }
        </Body>
    )
}

            //     currentRecipes?.map(c=>{
            //         return (
            //             <Fragment>
            //                 <Link to={"/home/" + c.id}>
            //                     <Card image={c.image} title={c.title} diets={c.diets.name} spoonacularScore={c.spoonacularScore} key={c.id} />
            //                 </Link>
            //             </Fragment>
            //         )
            //     })
            // }