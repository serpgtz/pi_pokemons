import React from "react";
import { Link } from "react-router-dom";


export function LandingPage(){


    return(
        <div>
         <Link to="/home">
          <button>Pokemons</button>
         </Link>
        </div>
    )

}