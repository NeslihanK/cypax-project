import React, { Component } from 'react';
import CourseCard from './CourseCard';
// import {Link} from 'react-router-dom';
import api from '../api';
import { Container, Col, Row, CardImg, CardLink, Button, Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
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
      this.state.profile && <div className="Profile">

        <Card>
          <CardBody>
            <CardTitle><h1>Hello {this.state.profile.name} learn something awesome!!! </h1></CardTitle>
            <CardText>Username: {this.state.profile.name}</CardText>
            <CardText>Email: {this.state.profile.email}</CardText>
          </CardBody>
        </Card>



        {this.state.profile._favorites.map(element => {
          console.log(element)
          return (
            <div>
              <Container>
                <Row>
            
                  <Col col-sm-3 xs="6">
                  <Card>
                  <CardBody>
                  <CourseCard key={element._id}/>

                  <CardTitle>Coursename: {element.courseName}</CardTitle>                 
                   <CardImg  src={element.image}/>
                 
                  <CardText>Price: {element.price}</CardText>
                  <Button><CardLink href={element.link} target="_blank" >Link</CardLink></Button>

                  <Button onClick={() => {this.handleClick(element._id)}} >Delete</Button>
                  </CardBody>
             </Card>
             </Col>
             </Row>
            </Container>
            </div>
            )
        })}
      
      </div>
    );
  }
}

export default Profile;