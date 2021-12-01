import React, { Fragment, useEffect } from 'react'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';


export default function Home(){
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)

    useEffect(()=>{
        dispatch(getRecipes())
    },[])


    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }

    return (
        <div>
            <Link to='/recipe'> Create recipe</Link>
            <h1>Recipe's World</h1>
            <button onClick={e=>{handleClick(e)}}>
                Load recipes again!
            </button>
            <div>
                <select>
                    <option value="az">A - Z</option>
                    <option value="za">Z - A</option>
                </select>
                <select>
                    <option value="paleolithic">Paleo</option>
                    <option value="vegan">Vegan</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="primal">Primal</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="low foodmap">Low foodmap</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>                
                </select>
                <select >
                    <option value="top">Top Score</option>
                    <option value="button">Button Score</option>
                </select>
                <select >
                    <option value="all">All</option>
                    <option value="api">Api</option>
                    <option value="created">Originals recipes</option>
                </select>
            {
                allRecipes?.map(c=>{
                    return (
                        <Fragment>
                            <Link to={"/home/" + c.id}>
                                <Card image={c.image} title={c.title} diets={c.diets.name} spoonacularScore={c.spoonacularScore} key={c.id} />
                            </Link>
                        </Fragment>
                    )
                })
            }
                
            </div>
        </div>
    )
}