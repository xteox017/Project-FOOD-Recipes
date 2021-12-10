import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipe } from "../actions";
import styled from 'styled-components'

const SearchBox = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
`
const Button = styled.button`
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color:#ffffff ;
    text-decoration-style:solid;
    background-color:transparent;
    pointer-events: painted;

    ion-icon {
        font-size: 48px;
        color: #ff4d00;
        border-bottom:#fff;
        }

   :focus ~ .ImputSearch{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid #fcf80cb9;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);


}

`
const ImputSearch = styled.input`
    height: 50px;
    width: 65px;
    border-style: none;
    padding: 5px;
    font-size: 25px;
    letter-spacing: 3px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: transparent;
    padding-right: 30px;
    color:#ffffff;

    ::placeholder{
        color:#ffffff;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 100;}

    :focus{
        width: 300px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom:1px solid rgba(255,255,255,.5);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
`

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
        <SearchBox>
            <ImputSearch
            type = 'text'
            placeholder = 'Search...'
            onChange = {(e) => handleInputChange(e)}
            spellCheck="false"
            setName=""
            
            />
            <Button type ='submit' onClick ={(e) => handleSubmit(e)}> <ion-icon name="search"></ion-icon></Button>
        </SearchBox>
    )
}