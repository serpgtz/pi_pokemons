import React from "react";
import s from "./Loadin.module.css"
import image from "../image/pngegg.png"




export default function Loading(){
    return[
        <div className={s.container}>
            <h1>Loading...</h1>
            <img src={image} width="270px"/>
        </div>
    ]
}