import React, { Component } from 'react';
import api from '../api';
import CourseCard from './CourseCard';
import { Link} from 'react-router-dom';
// import './Secret.css';
import { Container, Col, Row, CardImg, Button, Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      search: " "
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  componentDidMount() {
    api.getCourseList(this.props.match.params.category)
      .then(courseList => {
        this.setState({
          courses: courseList,
        })
      })
    
  }

  render() {    


    return (

      <div className="CourseList">
        <input  type="text" maxLength="40" value = {this.state.search} onChange = {this.updateSearch.bind(this)} /> <br/>
          <br/>
          {this.state.courses.filter(e => {return e.courseName.toLowerCase().includes(this.state.search.toLowerCase())}).map((element, index) => {
          return (
            <Container>
                <Row>
                <Link to={`/courses/${element._id}`}>
                  <Col col-sm-3 xs="6">
                  <Card>
                  <CardBody>
                  <CourseCard key={element._id}/>

                  <CardTitle>Coursename: {element.courseName}</CardTitle>                 
                   <CardImg  src={element.image}/>
                 
                  <CardText>Price: {element.price}</CardText>
                  </CardBody>
             </Card>
             </Col>
             </Link>
             </Row>
            </Container>

          )
        })}
        <Link to={`/`}>
          <button>Back to Languages</button>
        </Link>
        
      </div>);
  }
}

    


export default CourseList;
