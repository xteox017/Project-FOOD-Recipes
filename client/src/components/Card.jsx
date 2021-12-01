import React from "react";

export default function Card({image, title, diets, spoonacularScore}){
    return(
        <div>
            <img src={image} alt="img not found" width="450px" height="350px" />
            <h5>{title}</h5>
            <h5>{diets}</h5>
            <h5>{spoonacularScore}</h5>
        </div>
    )
}