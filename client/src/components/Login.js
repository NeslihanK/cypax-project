import React, { Component } from 'react';
import api from '../api';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Login">

        <div className="Banner">

        <img src="../../images/Shutter1.png" width="100%" heigt="" /> <br/>
        </div>
      <Form>
         <br/>

         <h2>Login</h2> 
         <br/>
        <FormGroup>
          <Label for="exampleEmail"><h5>Email</h5></Label>
          <Input className="mx-auto" type="email" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} name="email" id="exampleEmail" placeholder="Email placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"><h5>Password</h5></Label>
          <Input className="mx-auto" type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}} name="password" id="examplePassword" placeholder="Password placeholder" />
        </FormGroup>
       
     
        <br/>
        <Button onClick={(e) => this.handleClick(e)}>Submit</Button>
      </Form>
     
      </div>
     );
  }
}

export default Login;
