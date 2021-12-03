import React, { Fragment, useEffect } from 'react'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterRecipesByDiets, filterScore, orderByName } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paged from './Paged';
import SearchBar from './SearchBar';



export default function Home(){
    const dispatch = useDispatch()


    const allRecipes = useSelector((state) => state.recipes)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    

    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])


    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }

    function handleFilterDiets(e){
        e.preventDefault();
        dispatch(filterRecipesByDiets(e.target.value))
        setCurrentPage(1)
    }
    
    // function handleFilterScore(e){
    //     dispatch(filterScore(e.target.value))
    // }
    function handleFilterScore(e) {
        e.preventDefault();
        dispatch(filterScore(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    // function handleFilterCreated(e){
    //     dispatch(filterRecipeCreated(e.target.value))
    // }

    return (
        <div>
            <Link to='/recipe'> Create recipe</Link>
            <h1>Recipe's World</h1>
            <button onClick={(e)=>{handleClick(e)}}>
                Load recipes again!
            </button>
            <div>
                <select onChange={(e) => {handleSort(e)}}>
                    <option value="asc">A - Z</option>
                    <option value="des">Z - A</option>
                </select>
                <select onChange={(e) => {handleFilterDiets(e)}}>
                    <option value="all">All</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="vegan">Vegan</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="primal">Primal</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="fodmap friendly">Low foodmap</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>                
                </select>
                <select onChange={(e) => {handleFilterScore(e)}}>
                    <option value="asc">"[0 - 100]"</option>
                    <option value="button">"[100 - 0]"</option>
                </select>
                {/* <select onChange={e => handleFilterCreated(e)}>
                    <option value="all">All</option>
                    <option value="created">Created Recipes</option>
                    <option value="api">Recipes Cataloge</option>
                </select> */}
                <Paged
                recipesPerPage = {recipesPerPage}
                allRecipes={allRecipes.length}
                paged = {paged}
                />
                <SearchBar/>
            {
                currentRecipes?.map(c=>{
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