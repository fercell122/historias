import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
//import LogoContainer from '../../components/LogoContainer/index.js';
import TextoContainer from '../../components/TextoContainer/index';
//import ButtonC from "../../components/ButtonContainer/index";
import "./styles.css";
import Album from '../../components/album/album.js';
import Typography from '@mui/material/Typography';


function Landing(){




    return(
        <div>
            
            <div>
            <VideoLops /> 
            </div>
             
           
            <div className='container1'>
            
            
            <TextoContainer 
            subtitle="S.O.S"
            title="Designers"
            paragrafo="Histórias do Pedrão"
            />
           </div>

           <div style={{
               "marginTop":"-9%"
           }}>
               <Album/>
           </div>
            
          
        </div>
        
    )
}

export default Landing;
