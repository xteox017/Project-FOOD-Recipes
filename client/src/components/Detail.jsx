import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions/index'
import { useEffect } from 'react'

export default function Detail(props){
    // console.log(props)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])
    
    const myRecipe = useSelector((state)=> state.detail)

    //  if(myRecipe.diets && typeof myRecipe[0].diets === 'object'){
    //     var diet = myRecipe.diets.map(el => el.name)
    // } else {
    //     var diet = myRecipe.diets
    // }

    // if(typeof(myRecipe[0].diets ||  myRecipe.diets) !== 'object'){
    //     var diet = myRecipe[0].diets.map(el => el.name)
    // } else {
    //     var diet = myRecipe.diets
    // }

    return (
        <div>
            {
                myRecipe.length> 0 ?
                <div>
                    <h5>{myRecipe[0].title}</h5>
                    <img src={myRecipe[0].image} alt="img not found" width="450px" height="350px" />
                    <h5>{myRecipe[0].summary}</h5>
                    <h5>{myRecipe[0].spoonacularScore}</h5>
                    <h5>{myRecipe[0].healthScore}</h5>
                    <h5>{        (myRecipe[0].analyzedInstructions) // <=== Funciona API(Array directo)
                                // ? (typeof myRecipe[0].analyzedInstructions  === 'object')
                                // ? <ul>{myRecipe[0].analyzedInstructions.map(d => <li>{d}</li>)}</ul>
                                // : <p>{myRecipe[0].analyzedInstructions}</p>
                                // : <p>No steps</p>
                            }</h5>
                    {/* <h5>{!myRecipe.createdDb? myRecipe.diets + "" : myRecipe.diets.map(el=> el.name + (' '))}</h5> */}
                    <h5> Diets:      
                        {myRecipe[0].createdDb? <ul>{myRecipe[0].diets.map(d => <li>{d.name}</li>)}</ul>:
                         <ul>{myRecipe[0].diets.map(d => <li>{d}</li>)}</ul>// Funciona db ***********+++++
                    }
                    </h5>
                    <h5>Type of dish:<br/>
                    {myRecipe[0].dishTypes ? <ul>{myRecipe[0].dishTypes.map(d => <li>{d}</li>)}</ul> : "n/a"}</h5>
                </div> : <p>Loading ...</p>
            }
            <Link to='/home'>Go back</Link>
        </div>
    )
}