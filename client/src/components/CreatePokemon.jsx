import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTipos,postPokemons } from "./action";
import { Link, useHistory } from "react-router-dom";
import s from "./createPokemon.module.css"


function Validate(input){
    const error={};
    if(!input.name){
        error.name = "falta capturar nombre"
       
        return error
    }
     else if(input.name.length<5||input.name.length>15){
        error.name = "nombre no debe tener menos de 5 caractares ni mayor a 15 caracteres"
        return error
    }
    if(!input.image){
        error.image = "falta agregar imagen"
        return error
    }
    if ( !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/.test(input.image)) {
       
       
          
        
        error.image = 'Not valid format';
        return error
    }
       
    if(!input.vida){
        error.vida = "falta capturar vida"
        return error
    }

   
    else if(input.vida<5||input.vida>100){
        error.vida = "Vida debe de ser mayor o igual a 5 y menor o igual a 100"
        return error
    }
    if(!input.peso){
        error.peso = "debes capturar el peso"
        return error
    }
    
    
    else if(input.peso<5||input.peso>1000){
        error.peso = "peso debe de ser mayor o igual a 5 y menor o igual a 1000"
        return error
    }
    if(!input.ataque){
        error.ataque = "debes capturar ataque"
    }
    
    else if(input.ataque<1|| input.ataque>100){
        error.ataque = "ataque debe de ser mayor o igual a 1 y menor o igual a 100"
        return error
    }
    if(!input.defensa){
        error.defensa = "debes capturar defensa"
        return error
    }
    
    else if(input.defensa<1|| input.defensa>100){
        error.defensa = "defensa debe de ser mayor o igual a 1 y menor o igual a 100"
    }
    if(!input.velocidad){
        error.velocidad = "debes capturar velocidad"
        return error
    }
   
    else if(input.velocidad<1|| input.velocidad>100){
        error.velocidad = "velocidad debe de ser mayor o igual a 1 y menor o igual a 100"
        return error
    }
    if(!input.altura){
        error.altura = "debes capturar altura"
        return error
    }
    
    else if(input.altura<.1|| input.altura>20){
        error.altura = "altura debe de ser mayor o igual a 1 y menor o igual a 20mts"
        return error
    }
    if(!input.tipos[0]){
        error.tipos = "debes capturar al menos 1 tipo"
        return error
    }
   
  
    console.log("holaaaa",error)
    return error
}





export default function CreatePokemon(){

    const tipos = useSelector(state=>state.tipos)
    const dispatch = useDispatch()
    const [error,setError] = useState({})

    const [input,setInput] = useState({
        name:"",
        image:"",
        vida:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        altura:"",
        peso:"",
        tipos:[]

    })

    const history = useHistory()

    useEffect(()=>{
        dispatch(getTipos())
    },[dispatch])

    function handleSelect(e){
        e.preventDefault()
        if(input.tipos.includes(e.target.value)){
            alert("tipo ya Agregado")
            return false;
        }
        setInput({
            ...input,
            tipos:[...input.tipos,e.target.value]
        })

        setError(Validate({
            ...input,
            tipos:[...input.tipos,e.target.value]
        }))
        console.log(input.tipos)
    }

   function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value

    
    })

    setError(Validate({
        ...input,
        [e.target.name]:e.target.value
    }))
   

   }

   function handleSubmit(e){
    e.preventDefault()
    dispatch(postPokemons(input))
    history.push("/home")

   }

   function handleDelete(e){
    console.log("desdefiler", e.target.value)
    let typesFilter = input.tipos.filter(t=>t !==e.target.value)
    setInput({
        ...input,
        tipos:typesFilter
    })

    setError(Validate({
        ...input,
        tipos:typesFilter
    }))
    
   }

    return(
        <div>
            <h1>crear pokemon</h1>

            <form onSubmit={e=>handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input value={input.name} type={"text"}
                    name="name"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.name && (
                            <p className= {s.error}>{error.name} </p>
                        )
                    }

                <div>
                    <label>Imagen:</label>
                    <input value={input.image} type={"text"}
                    name="image"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.image && (
                            <p className= {s.image}>{error.image} </p>
                        )
                    }


                <div>
                    <label>Vida:</label>
                    <input value={input.vida} type={"number"}
                    name="vida"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.vida && (
                            <p className= {s.error}>{error.vida} </p>
                        )
                    }

                <div>
                    <label>Peso:</label>
                    <input value={input.peso} type={"number"}
                    name="peso"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.peso && (
                            <p className= {s.error}>{error.peso} </p>
                        )
                    }

                <div>
                    <label>Ataque:</label>
                    <input value={input.ataque} type={"number"}
                    name="ataque"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.ataque && (
                            <p className= {s.error}>{error.ataque} </p>
                        )
                    }

                <div>
                    <label>Defensa:</label>
                    <input value={input.defensa} type={"number"}
                    name="defensa"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.defensa && (
                            <p className= {s.error}>{error.defensa} </p>
                        )
                    }

                <div>
                    <label>Velocidad:</label>
                    <input value={input.velocidad} type={"number"}
                    name="velocidad"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.velocidad && (
                            <p className= {s.error}>{error.velocidad} </p>
                        )
                    }

                <div>
                    <label>Altura:</label>
                    <input value={input.altura} type={"number"}
                    name="altura"
                    onChange={e=>handleChange(e)}/>
                </div>
                {
                        error.altura && (
                            <p className= {s.error}>{error.altura} </p>
                        )
                    }
                <div>
                    <label>Tipos:</label>
                    <select onChange={e=>handleSelect(e)}>
                        <option>Seleccionar</option>
                        {
                            tipos?.map(t=>{
                                return(
                                    <option name={t.name} value={t.name} >{t.name}</option>
                                )
                            })
                        }
                    </select>

                    {
                        error.tipos && (
                            <p className= {s.error}>{error.tipos} </p>
                        )
                    }
                    

                    <ul>
                        {
                            input.tipos?.map(t=>{
                                return(<div>
                                     <li>{t}</li>
                                    <button name="tipos" value={t} onClick={e=>handleDelete(e)}>x</button>
                                   
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button type="submit"
                    disabled={Object.keys(error).length>0||input.name===""}>Crear Pokemon</button>
                </div>
               



            </form>

            <Link to={"/home"}>
            <button>home</button>
            </Link>
       </div>
    )
}