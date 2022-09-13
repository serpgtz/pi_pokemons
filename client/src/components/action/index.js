import React from "react";
import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const ORDEN_ALPHA = "ORDEN_ALPHA";
export const FILTER_ATACK = "FILTER_ATACK";
export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const SAVE_PAGE = "SAVE_PAGE";
export const API_OR_CREATE = "API_OR_CREATE";
export const GET_TIPOS = "GET_TIPOS";
export const POST_POKEMON = "POST_POKEMON";
export const FILTER_TIPOS = "FILTER_TIPOS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ACTUALIZACION_NAME = "ACTUALIZACION_NAME"



export function getPokemons(){
    return async function(dispatch){
        const pokemones = await axios.get("http://localhost:3001/api/pokemones")
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: pokemones.data
        })
    }
}

export function getPokemonById(id){
    console.log(id)
    return async function(dispatch){
    
        const pokemon = await axios.get(`http://localhost:3001/api/pokemones/${id}`)
        return dispatch({
            type: GET_POKEMON,
            payload: pokemon.data
        })
    }
}

export function getPokemonByName(name){
    return async function(dispatch){
        const pokemon = await axios.get(`http://localhost:3001/api/pokemones?name=${name}`)
        return dispatch({
            type:GET_POKEMON_BY_NAME,
            payload:pokemon.data
        })
    }
}

export function pokemonBYalpha(orden){
    return function(dispatch){
        return dispatch({
            type:ORDEN_ALPHA,
            payload:orden
        })
    }

}

export function pokemonByAtack(ataque){
    return function(dispatch){
        return dispatch({
            type:FILTER_ATACK,
            payload:ataque
        })
    }
}

export function resetPokemon(){
    return function(dispatch){
        return dispatch({
            type:REMOVE_POKEMON
        })
    }
}

export function savePage(page){
    return function(dispatch){
        return dispatch({
            type:SAVE_PAGE,
            payload:page
        })
    }
}

export function apiorCreate(value){
    return function(dispatch){
        return dispatch({
            type:API_OR_CREATE,
            payload:value
        })
    }
}
export function getTipos(){
    return function(dispatch){
        axios.get("http://localhost:3001/api/tipos")
        .then(response=>{
            return dispatch({
                type:GET_TIPOS, 
                payload:response.data
            })
        })
    }
}

export function postPokemons(payload){
    return async function(dispatch){
        console.log(payload)
        const post= await axios.post("http://localhost:3001/api/pokemones",payload)
        return dispatch({
            type:POST_POKEMON,
        })
    }
}
export function filterByTipos(tipos){
    return function(dispatch){
        console.log(tipos)
        return dispatch({
            type:FILTER_TIPOS,
            payload:tipos
        })
    }
}

export function putPokemon(payload){
    return function(dispatch){
        axios.put("http://localhost:3001/api/pokemones",payload)
        .then(response=>{
            dispatch({
                type:ACTUALIZACION_NAME,
            })
        })
    }

}



// export function getPokemons(){
//     axios.get("http://localhost:3001/api/pokemones")
//     .then(response=>{
//         return function dispatch(){
//             return dispatch({
//                 type:GET_ALL_POKEMONS,
//                 payload: response.data
//             })
//         }
//     })
// }