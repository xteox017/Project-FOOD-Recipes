import React from "react";
import styled from 'styled-components';

//Styled-components

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
`;

const Li = styled.li`
    /* display: flex; */
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
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
`;

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
                        <a href onClick={() => paged(number)}>{number}</a>

                    </Li>
                ))}

            </Ul>
        </nav>
    )
}