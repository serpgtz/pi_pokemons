import React from "react";
import {useDispatch} from "react-redux"
import {getPokemons} from "./action"



export default function PokemonNotFound(){


    const dispatch = useDispatch()
    function handleRefresh(){
        dispatch(getPokemons())
    }
    
    
    return(
        <div>
            <h1>Pokemon no encontrado</h1>
            <button onClick={e=>handleRefresh(e)}>Refresh</button>
        </div>
    )

}

