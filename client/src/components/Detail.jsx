import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonById,resetPokemon } from "./action/index";
// import ActualizarName from "./ActualizarName";
import s from "./Detail.module.css"



export default function Detail(props){


    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(getPokemonById(props.match.params.id))
        console.log(props.match.params.id)
        return()=>dispatch(resetPokemon())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const pokemon = useSelector(state=>state.pokemon)
    
  
    console.log(pokemon)
  

    // function handleback(e){
    //     window.history.back()
    // }


    return (
        <div className={s.fullcontainer}>
        <div className={s.detail}>
                {
                    pokemon.length>0 ?
                    <div className={s.div}>
                        <h1 className={s.name}>{pokemon[0].name}</h1>
                        <div className={s.containerImage}>
                            
                             <img src={pokemon[0].image} width="300px"/>
                        </div>
                        <div className={s.containerTipos}>
                             <h4 className={s.tipos}>Tipos:{pokemon[0].hasOwnProperty("types") ?pokemon[0].types?.map(t=><fragment className={s.containerP}><p>{t.name}</p></fragment>):pokemon[0].tipos?.map((t=><p>{t}</p>))}</h4>
                        </div>
                        <h4 className={s.vida}>Vida:{pokemon[0].vida}</h4>
                        <h4 className={s.ataque}>Ataque:{pokemon[0].ataque}</h4>
                        <h4 className={s.defensa}>Defensa:{pokemon[0].defensa}</h4>
                        <h4 className={s.velocidad}>Velocidad:{pokemon[0].velocidad}</h4>
                        <h4 className={s.altura}>Altura:{pokemon[0].altura}Mts</h4>
                        <h4 className={s.peso}>Peso:{pokemon[0].peso}Kilos</h4>
                        <h5 className={s.id}>Id:{pokemon[0].id}</h5>
                    </div>:<h1>Loading...</h1>
          
                }
                
                        
                {/* <ActualizarName id={pokemon.id}/> */}
                <div>
                   
                        {/* <button onClick={e=>handleback(e)}>Volver</button> */}
                </div>
                
                <Link to={"/home"}>
                         <button className={s.button}>Home</button>
                    </Link>
                
            </div>      
        </div>
    )
}