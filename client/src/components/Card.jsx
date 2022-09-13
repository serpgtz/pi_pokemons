import React from "react";
import s from "./Card.module.css"



export default function Card({image, name, tipos,ataque}){

    return(
        <div className={s.card}>
            <img className={s.image} src={image} width="180px" height="180px"/>
            <div className={s.info}>
            <h2 className={s.name}>{name}</h2>
            <h4 className={s.tipos}>{tipos}</h4>
            <fragment className={s.ataque}>
            {/* <p>ataque:<br/> {ataque}</p> */}
            </fragment>
            </div>

        </div>
    )
}