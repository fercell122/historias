import React from 'react';
import "./styles.css";


export default function TextoContainer(props){

    return(
        <div className="text-container">
        <h2>{props.subtitle}</h2>
        <h1>{props.title}</h1>
        <p>{props.paragrafo}</p>
    </div>
    )
}