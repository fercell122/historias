import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import candidate from '../CandidateItem';


const useStyles = makeStyles((theme) => ({
  root: {

    '& > *': {
      margin: theme.spacing(2),
      width: '35ch',
      marginLeft:'135px',
      
      
    },
    "& .MuiFormLabel-root": {
        color: "#F0F8FF",
        fontSize:"20px",
        fontFamily:"Poppins"
      },

      "& .MuiInput-input":{
        color: "#F0F8FF",
        fontSize:"30px",
        fontFamily:"Poppins"

      },
      
    
  },
}));




export default function BasicTextFields(props) {
  const classes = useStyles();
  const [name, setName] = useState([])
 
  const handleChange = (event) =>{
    setName(event.target.value);
    console.log(name)
    console.log(candidate)
  }


  return (
    <form  className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label={props.nome} value={props.atrib} onChange={handleChange} />
      
     
    </form>
  );
}
