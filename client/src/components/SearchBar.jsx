import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipe } from "../actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
            
    }

    function handleSubmit(e){
        e.preventDefault()
        setName("")
        dispatch(getNameRecipe(name))
    }

    return (
        <div>
            <input
            type = 'text'
            placeholder = 'Search...'
            onChange = {(e) => handleInputChange(e)}
            spellCheck="false"
            setName=""
            
            />
            <button type ='submit' onClick ={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}