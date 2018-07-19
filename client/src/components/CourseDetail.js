import React, { Component } from 'react';
import api from '../api';
import { Container, Col, Row, CardLink, Card, CardImg, CardText, CardBody,
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
      <div className="CourseDetail">
      <Container>
                <Row>
            
                  <Col col-sm-3 xs="6">

      <Card>
        <CardImg top width="100%" src={this.state.course.image} />
        <CardBody>
          <CardTitle>{this.state.course.courseName}</CardTitle>
          <CardSubtitle>{this.state.course.category}</CardSubtitle>
          <CardText>platform: {this.state.course._platform.platformName}</CardText>
          <CardText>price: {this.state.course.price}</CardText>
          <CardText>rating: {this.state.course.rating}</CardText>
          <Button><CardLink href={this.state.course.link} target="_blank" >Link</CardLink></Button>



        </CardBody>
      </Card>
      
      
        <Link to={`/category/${this.state.course.category}`}>
          <button>Back to List</button>
        </Link>
        {api.isLoggedIn() && <button onClick={this.handleClick.bind(this)} >Add to favorites</button>}
        </Col>
             </Row>
            </Container>
      </div>
    );
  }
}


export default CourseDetail;