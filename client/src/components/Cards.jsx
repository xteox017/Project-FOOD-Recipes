import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Link, NavLink } from 'react-router-dom';

//Styled-Components

const Body = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `;

const Span = styled.span`
    margin: 100px;
    font-size: 30px;
    font-family: 'Raleway';
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
        <Body>{
                            currentRecipes?.map(c=> 
                            <Card 
                            image={c.image} 
                            title={c.title} 
                            // diets={c.diets && c.diets[0].name}
                            diets={c.diets?.map(function(diets) {
                                                 
                         if(typeof diets === 'object'){                             
                             return (
                                 <label>{diets.name}</label>                            
                              )                             
                        }
                        else {                            
                            return(
                                <div>
                                    <label>{diets}</label>                                    
                                </div>
                            )
                        }
                      })}
                    //         diets={
                    //     c.diets
                    //       ? c.diets
                    //       : c.diets && c.diets[0].map((e) => e.diets)
                    //   } 
                            spoonacularScore={c.spoonacularScore} 
                            id={c.id} 
                            />
                    ) 
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