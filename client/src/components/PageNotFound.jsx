import React from "react";
import { Link } from "react-router-dom";



export default function PageNotFound(){



    return(
    <div>
        <h1>Pagina NO encontrada!!</h1>
        <Link to="/home">
        <button>Home</button>
        </Link>
    </div>
    )
}