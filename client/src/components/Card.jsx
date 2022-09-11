import React from "react";
import s from "./Card.module.css"



export default function Card({image, name, tipos,ataque}){

    return(
        <div className={s.card}>
            <img src={image} width="200px" height="200px"/>
            <div className={s.info}>
            <h2 className={s.name}>{name}</h2>
            <h4>tipos:<br/>{tipos}</h4>
            <fragment className={s.ataque}>
            <p>ataque:<br/> {ataque}</p>
            </fragment>
            </div>

        </div>
    )
}