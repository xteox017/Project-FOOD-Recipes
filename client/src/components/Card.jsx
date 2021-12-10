import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import star from '../assets/star.png'
const Images = styled.div`
    
        border-radius: 10px;
        height: 231px;
        width: 330px;
        margin: 10px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        overflow: hidden


`
const Tarjeta = styled(Link)`



        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 58% 15% 27%;
        width: 350px;
        height: 440px;
        border: 1.5px lightskyblue solid;
        margin: 15px;
        padding: 0px;
        border-radius: 8px;
        box-shadow: 5px 5px 20px lightgray;
        cursor: pointer;
        text-decoration: none;
        color: #23394d;
        &:hover{
            transition: all 0.5s ease;
            transform: scale(0.95);
        }
`
const DivTitle = styled.div`
    width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    
`
const Title = styled.h5`
        margin: 10px;
        padding: 0;
        text-transform: capitalize;
        color: #23394d;
        font-size: 25px;
        font-weight: 700;
        font-family: sans-serif;
        text-align: center;

`

const Ima = styled.img`
        border-radius: 10px;
        height: 231px;
        width: 350px;
        object-fit: fill;
`

const Dietadiv = styled.div`

        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        box-sizing:border-box;
        font-family: sans-serif;
        text-transform: capitalize;
        word-wrap: break-word;
        font-size: 14px
       

`
const H5 = styled.h5`
        flex-direction: row;
`
const DivScore = styled.div`
    position: absolute;
   top: 35%;
   left: 50%;
   height: 30%;
   width: 50%;
   margin: -15% 0 0 -25%;   
`
export default function Card({image, title, diets, spoonacularScore,id}){

    
    return(
        <Tarjeta to={`/detail/${id}`}>
            
            <Images>
                <Ima src={image} alt="img not found"  />
            </Images>
            <DivTitle> 
                <Title >{title} </Title>
            
            </DivTitle>
            <Dietadiv>{diets} 
                {/* <ul>{diets.map(d => <li>{d}</li>)}</ul> */}
                <DivScore>
                    <H5>Score:
                    <img src={star} width='15px' height='15px' alt="star"/>
                    {spoonacularScore}</H5>
                    
                </DivScore>
            </Dietadiv>
           
        </Tarjeta>
    )
}