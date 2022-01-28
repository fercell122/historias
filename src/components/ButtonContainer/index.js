import React from 'react';
import {Link} from "react-router-dom";
//import imgBut from "../../assets/copy.svg"
import "./styles.css"

export default function ButtonContainer(props){

return(
    <div className="conti">

    <Link to={props.lank} className="evolution">
                   
                   <button>
                   {props.title}
                   </button>
                   </Link>
 </div>
)
}