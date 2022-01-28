import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';






export default class FormDataComponent extends Component {
    userData;
    
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
           
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

   


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(sessionStorage.getItem('user'));

        if (sessionStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
               
            })
        } else {
            this.setState({
                name: '',
                email: '',
                
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div>
           
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <TextField 
                  id="standard-basic" 
                  label="Nome" 
                  name="habilidades"
                  value={this.state.names} 
                  onChange={this.onChangeName}
     />

          <TextField 
                  id="standard-basic" 
                  label="Email" 
                  name="habilidades"
                  value={this.state.email} 
                  onChange={this.onChangeEmail}
          />
                   
                   
                </form>
            </div>
            </div>
        )
    }
}