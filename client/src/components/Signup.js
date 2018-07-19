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
        <h2>Signup</h2>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} name="name" id="exampleName" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}} name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup check>
           <Label check>
             <Input type="checkbox" />{' '}
             Check me out
           </Label>
        </FormGroup>
         <br/>
          <Button onClick={(e) => this.handleClick(e)}>Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
