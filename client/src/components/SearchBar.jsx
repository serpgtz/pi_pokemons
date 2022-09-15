import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getPokemonByName} from "./action";
import s from "./SearchBar.module.css"






export default function SearchBar({setOrden,setViewElement}){

    const [name, setName] = useState("")

    const dispatch = useDispatch()


    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSumit(e){
        e.preventDefault()
        dispatch(getPokemonByName(name))
        setOrden(1)
        setViewElement(true)
        setName("")
    }



return (
    <div>

 <input className={s.search} type={"text"}
    onChange={e=>handleInputChange(e)}
    placeholder="pokemon..."
    value={name}/>
 <button className={s.button} type="submit" onClick={e=>handleSumit(e)}>Buscar</button>

    </div>
)
    
}