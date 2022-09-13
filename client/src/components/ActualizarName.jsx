import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putPokemon } from "./action";



export default function ActualizarName(){

    const [input,setInput] = useState("")

    const dispatch = useDispatch()

function handleChange(e){
    e.preventDefault()
    setInput(e.target.value)
    console.log(input)



}
function handleSubmit(e){
    e.preventDefault()
    dispatch(putPokemon(input))
}

    return(
        <div>
            <form onSubmit={e=>handleSubmit(e)}>
                <label>Nombre Nuevo</label>
                <input value={input} type="text" 
                onChange={e=>handleChange(e)}/>
                <div>
                    <button type="submit">Actualizar</button>
                </div>

            </form>
        </div>
    )
}