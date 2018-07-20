import React, { Component } from 'react';
import api from '../api';
import { CardLink, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

// import './Secret.css';

class CourseDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
        course: null
    }
    
    
  }
  componentDidMount() {
    api.getCourseDetail(this.props.match.params.courseId)
    .then(course => {
        this.setState({
          course
        })
      })
  }
handleClick(){
  api.postFavorite(this.props.match.params.courseId)
  .then(data => console.log(data))
}
  render() {                
    return  this.state.course && (

      <div className="CourseDetails">
        <br/>
          <Link to={`/category/${this.state.course.category}`}>
          <button className="btn btn-primary">Back to List</button>
          </Link>
          {api.isLoggedIn() && <button className="btn btn-primary" onClick={this.handleClick.bind(this)} >Add to favorites</button>}

          <div className="container">
            <div className="row">
      <div className="mx-auto">
      <Card className="detail">
        
        <CardImg src={this.state.course.image} />
        <CardBody>
          <CardTitle>{this.state.course.courseName}</CardTitle>
          <CardSubtitle>Category: {this.state.course.category}</CardSubtitle>
          <CardText>platform: {this.state.course._platform.platformName}</CardText>
          <CardText>price: {this.state.course.price}</CardText>
          <Button><CardLink href={this.state.course.link} target="_blank" >Link</CardLink></Button>

        </CardBody>

      </Card>
      </div>
      </div>
      </div>
        
      
        {/* <Link to={`/category/${this.state.course.category}`}>
          <button className="btn btn-primary">Back to List</button>
        </Link> */}
        {/* {api.isLoggedIn() && <button className="btn btn-primary" onClick={this.handleClick.bind(this)} >Add to favorites</button>} */}
       
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      
    );
  }
}


export default CourseDetail;