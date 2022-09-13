import React from "react";
import {GET_ALL_POKEMONS,FILTER_TIPOS,ACTUALIZACION_NAME, GET_POKEMON,GET_POKEMON_BY_NAME, ORDEN_ALPHA, FILTER_ATACK,REMOVE_POKEMON,SAVE_PAGE, API_OR_CREATE,GET_TIPOS,POST_POKEMON} from "../action"



const initialState={
    pokemones:[],
    allpokemones:[],
    pokemon:{},
    tipos:[],
    page: 1
}

export default function reducer(state=initialState, action){


    switch(action.type){

        case GET_ALL_POKEMONS:
        return {
            ...state,
            pokemones:action.payload,
            allpokemones:action.payload

        }

        case GET_POKEMON:
            return {
                ...state,
                pokemon:action.payload
            }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemones:action.payload
            }

        case ORDEN_ALPHA:
            if(action.payload==="asc"){
                let pokemonOrden = state.pokemones.sort((c1,c2)=>{
                    if(c1.name>c2.name){
                        return 1
                    }
                    else if(c1.name<c2.name){
                        return -1
                    }
                    else{
                        return 0;
                    }
                })
                return {
                    ...state,
                    pokemones: pokemonOrden
                }
                
          
            }
            if(action.payload==="des"){
            let pokemonOrden= state.pokemones.sort((c1,c2)=>{
                if(c1.name>c2.name){
                    return -1;
                }
                else if(c1.name<c2.name){
                    return 1
                }
                else{
                    return 0
                }
            })

            return {
                ...state,
                pokemones:pokemonOrden
            }
            }
        case FILTER_ATACK:
            let pokemons= state.pokemones
             let ataque = action.payload==="asc"?pokemons.sort((a,b)=>(a.ataque)-(b.ataque)):pokemons.sort((a,b)=>(b.ataque)-(a.ataque))

            return {
                ...state,
                pokemones:ataque
            }
        case REMOVE_POKEMON:
            return {
                ...state,
                pokemon:{}
            }
        case SAVE_PAGE:
            return {
                ...state,
                page:action.payload
            }

        case API_OR_CREATE:
            let pokemones = state.allpokemones
            let pokemonesfilter = action.payload==="cre"?pokemones.filter(p=>p.id.toString().length>6):pokemones.filter(p=>p.id.toString().length<6)

            return {
                ...state,
                pokemones:action.payload==="todos"?pokemones:pokemonesfilter
            }
        case GET_TIPOS:
            return {
                ...state,
                tipos:action.payload
            }

        case POST_POKEMON:
            return {
                ...state
            }

        case FILTER_TIPOS:
            let pokemon = state.allpokemones
            let pokemonTipos = pokemon.filter(t=>t.tipos?.includes(action.payload))
            let pokemonTypes = pokemon.filter(t=>t.types?.map(t=>t.name.includes(action.payload)))
            console.log(pokemonTypes)
            let pokemonsFilter= [...pokemonTipos,...pokemonTypes]
            return {
                ...state,
                pokemones:action.payload==="todos"?pokemon:pokemonTypes
            }
        case ACTUALIZACION_NAME:
            return {
                ...state
            }
            

        default:
            return state

    }

    
    
}