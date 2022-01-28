import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import "./styles.css"






export default class FormDataComponent extends Component {
    userData;
    

    constructor(props) {
        super(props);

        this.onChangeHabilidades = this.onChangeHabilidades.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          
            habilidades:''
        }
    }

    // Form Values
  

    onChangeHabilidades(e) {
        this.setState({ habilidades: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
              
                habilidades: this.userData.habilidades
            })
        } else {
            this.setState({
              
                habilidades: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }

     


    render() {
        return (
            <div>
               
            <div className="container">
                <form 
                
                onSubmit={this.onSubmit}>
                <TextField 
                   
                  id="standard-basic" 
                  label="HABILIDADES" 
                  name="habilidades"
                  value={this.state.habilidades} 
                  onChange={this.onChangeHabilidades}
     />

      
                   
                   
                </form>
            </div>
            </div>
        )
    }
}