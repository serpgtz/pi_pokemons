import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPokemons, pokemonBYalpha, pokemonByAtack,savePage, apiorCreate,getTipos,filterByTipos } from "./action";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginado from "./paginado";
import Card from "./Card";
import s from "./Home.module.css"
import PokemonNotFound from "./PokemonNotFound";
import pick from "../image/pikachu.png"





export function Home(){

    const pageActual = useSelector(state=>state.page)
    const pokemones = useSelector(state=>state.pokemones)
    const [pageCurrent, setPagecurrent] = useState(pageActual)
    const [pokemonPerPage, setPokemonPerPage]= useState(12)
    const indexOfLastPokemon = pageCurrent*pokemonPerPage//12
    const indexOffirstPokemon = indexOfLastPokemon - pokemonPerPage//0
    const currentPokemon = pokemones.slice(indexOffirstPokemon,indexOfLastPokemon)

    const [orden, setOrden] = useState("")

    const paginado = (pageNumber) => {
        setPagecurrent(pageNumber)
    }


    const dispatch =  useDispatch()
    const tipos = useSelector(state=>state.tipos)


useEffect(()=>{
    dispatch(getPokemons())
},[dispatch])

useEffect(()=>{
    dispatch(getTipos())
},[dispatch])


function handleRefresh(e){
     e.preventDefault()
    dispatch(getPokemons())
    setPagecurrent(1)
}
function handleAtaque(e){
    e.preventDefault()
    dispatch(pokemonByAtack(e.target.value))
    setPagecurrent(1)
    setOrden(e.target.value)
}

function handleAkfabetic(e){
    e.preventDefault()
    dispatch(pokemonBYalpha(e.target.value))
    setOrden(e.target.value)
    setPagecurrent(1)
}

function handlePage(e){
  
    dispatch(savePage(pageCurrent))
}

function handleApiorCreate(e){
    e.preventDefault(e)
    dispatch(apiorCreate(e.target.value))
    setPagecurrent(1)
}
function handleTipos(e){
    setPagecurrent(1)
    dispatch(filterByTipos(e.target.value))
    setOrden(e.target.value)
}



    return(
        <div className={s.body}>
            <nav className={s.nav}>

                <di>
                    <img src={pick}width="70px"/>
                </di>
                <div className={s.crear} >
                    <Link className={s.link} to ={"/pokemon"}>Crear<br/> Pokemon</Link>
                </div>
                <div>
                     <button className={s.refresh} onClick={e=>{handleRefresh(e)}}>Refresh Pokemones</button>
                 </div>
                <div className={s.filters}>
                    <label>Orden Alfabetico </label>
                  <select onChange={e=>handleAkfabetic(e)}>
                    <option>Seleccionar</option>
                    <option value={"asc"}>A-Z</option>
                    <option value={"des"}>Z-A</option>
                  </select>
                </div>

                <div className={s.filters} >
                    <label>Tipos</label>
                    <select onChange={e=>handleTipos(e)}>
                        <option value="todos">todos</option>
                        {
                            tipos?.map(t=>{
                                return(
                                    <option value={t.name}>{t.name}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className={s.filters} >
                    <label>Creados o Api </label>
                  <select onChange={e=>handleApiorCreate(e)}>
                    <option value={"todos"}>Todos</option>
                    <option value={"cre"}>Creados</option>
                    <option value={"api"}>Api</option>
                  </select>
                </div>

                <div className={s.filters} >
                    <label>Ataque </label>
                    <select onChange={e=>{handleAtaque(e)}}>
                        <option value="todos">Seleccionar</option>
                        <option value="asc">Acendente</option>
                        <option value="des">Decendente</option>
                    </select>
                </div>
                </nav>
                <SearchBar className={s.search}/>
                <Paginado pokemonPerPage={pokemonPerPage}
                pokemones={pokemones.length}
                paginado={paginado}/>


           



            {
                currentPokemon.length>0?
                typeof currentPokemon[0]==="object"?
                currentPokemon.map(p=>{
                    
                    return(
                    <div className={s.pokemones}>
                        <Link className={s.text} onClick={e=>handlePage(e)} to={"/Detail/"+p.id}>
                        <Card  name={p.name}
                        image={p.image}
                        tipos={p.tipos?.map(t=><p>{t}</p>)}
                        ataque={p.ataque}/>
                       
                        </Link>
                    </div>
                    
                    )
                }):<PokemonNotFound/>
                :<h1>Loading...</h1>
            } 
            
        </div>
    )
}