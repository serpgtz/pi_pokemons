import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css"


export function LandingPage(){


    return(
        <div className={s.fullContainer}>
            <div className={s.containerButton}>
         <Link to="/home">
          <button className={s.button}>Ir a Pokemons</button>
         </Link>
             </div>
        </div>
    )

}