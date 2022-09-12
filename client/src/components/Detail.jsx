import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonById,resetPokemon } from "./action/index";
import s from "./Detail.module.css"



export default function Detail(props){


    const dispatch = useDispatch()

   

    useEffect(()=>{
        dispatch(getPokemonById(props.match.params.id))
        console.log(props.match.params.id)
        return()=>dispatch(resetPokemon())
    },[dispatch])

    const pokemon = useSelector(state=>state.pokemon)


    return (
        <div className={s.detail}>
                {
                    pokemon.length>0 ?
                    <div>
                        
                        <img src={pokemon[0].image} width="300px"/>
                        <h1 className={s.name}>{pokemon[0].name}</h1>
                        <h4 className={s.tipos}>Tipos:<br/>{pokemon[0].hasOwnProperty("types") ?pokemon[0].types?.map(t=><p>{t.name}</p>):pokemon[0].tipos?.map((t=><p>{t}</p>))}</h4>
                        <h4 className={s.vida}>Vida:{pokemon[0].vida}</h4>
                        <h4 className={s.ataque}>Ataque:{pokemon[0].ataque}</h4>
                        <h4 className={s.defensa}>Defensa:{pokemon[0].defensa}</h4>
                        <h4 className={s.velocidad}>Velocidad:{pokemon[0].velocidad}</h4>
                        <h4 className={s.altura}>Altura:{pokemon[0].altura}</h4>
                        <h4 className={s.peso}>Peso:{pokemon[0].peso}</h4>
                        <h5 className={s.id}>Id:{pokemon[0].id}</h5>
                    </div>:<h1>Loading...</h1>

                    
                }
                
                <div>
                    <Link to={"/home"}>
                         <button className={s.button}>Home</button>
                    </Link>
                </div>
                
        </div>
    )
}