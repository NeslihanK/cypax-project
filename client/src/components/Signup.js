import React, { Component } from 'react';
import api from '../api';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
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
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/login") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Signup">

        <div className="Banner">

        <img src="../../images/Shutter1.png" width="100%"/> <br/>
        </div>
      <br/>
        <h2>Signup</h2>
        <br/>
        <Form>
        <FormGroup>
          <Label for="exampleEmail"><h5>Email</h5></Label>
          <Input className="mx-auto" type="email" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} name="email" id="exampleEmail" placeholder="Email placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName"><h5>Name</h5></Label>
          <Input className="mx-auto" type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} name="name" id="exampleName" placeholder="Name placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"><h5>Password</h5></Label>
          <Input className="mx-auto" type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}} name="password" id="examplePassword" placeholder="Password placeholder" />
        </FormGroup>
       
         <br/>
          <Button onClick={(e) => this.handleClick(e)}>Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
