import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getPokemonByName} from "./action";





export default function SearchBar(){

    const [name, setName] = useState("")

    const dispatch = useDispatch()


    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSumit(e){
        e.preventDefault()
        dispatch(getPokemonByName(name))
    }



return (
    <div>

 <input type={"text"}
    onChange={e=>handleInputChange(e)}
    placeholder="pokemon..."
    value={name}/>
 <button type="submit" onClick={e=>handleSumit(e)}>Buscar</button>

    </div>
)
    
}