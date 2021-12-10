import React from "react";
import styled from 'styled-components';

//Styled-components

// const Ul = styled.ul`
//     list-style: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 40px 0;

//     Li{
//         display: inline-block;
//         margin-right: 10px;
//     }

    
// `;

// const Li = styled.li`
    /* display: flex; */
    /* align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;

    .active a{
        background: #ce7f08;
        
    } */
    /* cursor: pointer;
    width: 30px;
    height: 30px;
    transition: background-color .3s;

    display: inline-block;
	height: 35px;
	margin-top: 35px;
	padding: 0 10px;
	border-radius: 35px;
	background-color: grey;


    &:hover,
	&:active {
		background-color: green;
		color: white;
	} */
// `;

// const LiSelected = styled.li`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 20px;
//     font-size: 20px;
//     cursor: pointer;
//     width: 20px;
//     height: 30px;
//     color: orange;
//     border: 2px #f07b3f solid;
//     border-top: none;
//     border-left: none;
//     border-right: none;
// `;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;

const LiSelected = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 20px;
    height: 30px;
    color: orange;
    text-decoration:none;
    

    :active{
       background-color: #4CAF50;
        color: #000000; 
    }
    
    :hover:not(.active) {background-color: #000000;}
`;

export default function Paged ({recipesPerPage, allRecipes, paged}){
    const pageNumbers = []

    for (let i=0; i<= Math.ceil((allRecipes/recipesPerPage)-1); i++){
        pageNumbers.push(i + 1)
    }
    return(
        <nav>
             <Ul>
                {pageNumbers && 
                pageNumbers.map(number => (
                    <Li className='number' key={number}>
                        <LiSelected href onClick={() => paged(number)}>{number}</LiSelected>

                    </Li>
                ))}

            </Ul>
        </nav>
    )
}