import React from "react";
import s from "./paginado.module.css"

export default function Paginado({pokemonPerPage, pokemones,paginado}){

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pokemones/pokemonPerPage); i++) {
        pageNumbers.push(i)
        
    }

    return(
        <nav className={s.paginas}>
            <ul>
                {
                    pageNumbers &&
                    pageNumbers.map(n=>(
                    
                      <li className={s.paginado} key={n}>  
                        <a onClick={()=> paginado(n)}>{n}</a>
                      </li>
                    ))
                }
            </ul>
        </nav>
    )


}