import React from "react"
import "./styles.css";




export default function videlop(){
    return(
        
        <video 
        autoPlay
        loop
        muted
       
       >
            <source src={process.env.PUBLIC_URL + '/media/rockW.mp4'} type="video/mp4"/>
        </video>
       
    )
}