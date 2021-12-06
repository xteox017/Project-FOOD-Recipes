import React from "react";
import { Link } from "react-router-dom";

export default function Card({image, title, diets, spoonacularScore,id}){

    // if(typeof diets[0] === 'object'){
    //     diets = diets.map(el => el.name)
    // }
    return(
        <div>
            <Link to={`/detail/${id}`}>
            <img src={image} alt="img not found" width="450px" height="350px" />
            <h5>{title}</h5>
            <h5>{diets}</h5>
            {/* <ul>{diets.map(d => <li>{d}</li>)}</ul> */}
            <h5>{spoonacularScore}</h5>
            </Link>
        </div>
    )
}