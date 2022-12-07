import React from "react";
import {useDispatch} from "react-redux"
// import {getPokemons} from "./action"
import poketriste from "../image/pngegg.png"




export default function PokemonNotFound(){


    const dispatch = useDispatch()
    // function handleRefresh(){
    //     dispatch(getPokemons())
    // }
    
    
    return(
        <div>
            <h1>Pokemon no encontrado</h1>
            <img src={poketriste} width="200px"/>
            {/* <button onClick={e=>handleRefresh(e)}>Refresh</button> */}
        </div>
    )

}

