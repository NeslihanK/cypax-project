import React, { Component } from 'react';
import CourseCard from './CourseCard';
// import {Link} from 'react-router-dom';
import api from '../api';
import { CardImg, CardLink, Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { log } from 'util';
// import './Secret.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: null
    }
  }
  componentDidMount(props) {
    api.getProfile()
      .then(data => {
        this.setState({
          profile: data
        })
      })
  }

  handleClick(courseId){
    api.deleteFavorite(courseId)
    .then(data => {
      this.setState({
        profile: data
      })
    })
  }

  render() { 
    console.log("new state ", this.state.profile)
    return (
      this.state.profile && 
      <div className="Profile mx-auto">
      
          <div className="container">
            <div className="row" >
              <Card className= "mx-auto">
                <CardBody>
                  <CardTitle><h1>Hello {this.state.profile.name} learn something awesome!!! </h1></CardTitle> <br/>
                  <CardText><h4>Username: {this.state.profile.name}</h4></CardText> <br/>
                  <CardText><h4>Email: {this.state.profile.email}</h4></CardText> <br/>
                </CardBody>
              </Card>
            </div>
    
        </div>


        {this.state.profile._favorites.map(element => {
          console.log(element)
          return (
            <div className="Profile">
            <div className="container">
            <div className="row">
            
             <div className="mx-auto">
              
                  <Card>
                  <CardBody>
                  <CourseCard key={element._id}/>

                  <CardTitle>Coursename: {element.courseName}</CardTitle>                 
                   <CardImg  src={element.image}/>
                
                  <CardText>Price: {element.price}</CardText>
                  <button className="btn btn-secondary"><CardLink href={element.link} target="_blank" >Link</CardLink></button>

                  <button className="btn btn-warning" onClick={() => {this.handleClick(element._id)}} >Delete</button>
                  </CardBody>
             </Card>
             </div>
            </div>
            </div>
            </div>
            )
        })}
      
      </div>
    );
  }
}

export default Profile;