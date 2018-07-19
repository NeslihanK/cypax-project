import React, { Component } from 'react';
import api from '../api';
import CourseCard from './CourseCard';
import { Link} from 'react-router-dom';
// import './Secret.css';
import { CardImg, Button, Card, CardText, CardBody,
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
        <input  type="text" maxLength="40" placeholder="Whatever you want..." className="form-control mx-auto" value = {this.state.search} onChange = {this.updateSearch.bind(this)} /> <br/>
          <div className="container">
            <div className="row">


          <br/>
          {this.state.courses.filter(e => {return e.courseName.toLowerCase().includes(this.state.search.toLowerCase())}).map((element, index) => {
        
         
          
          return (
                 

              <div className="col-3" >
                <Link to={`/courses/${element._id}`}>
                  <Card>
                    <CardBody>
                      <CourseCard key={element._id}/>

                      <CardTitle>Coursename: {element.courseName}</CardTitle>                 
                      <CardImg  src={element.image}/>
                  
                      <CardText>Price: {element.price}</CardText>
                    </CardBody>
                  </Card>
                </Link>
                <br/>
                <br/>
              </div>
              
               
          
            

          )
        })}
        
                <Link to={`/`}>
                <button className="btn btn-primary">Back to Languages</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
          </div>
        </div>
      </div>
      
      );
  }
}

    


export default CourseList;
