import React, { Component } from 'react';
import api from '../api';
import CourseCard from './CourseCard';
import { Link} from 'react-router-dom';
// import './Secret.css';

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
    
  }
  componentDidMount() {
    api.getCourseList(this.props.match.params.category)
      .then(courseList => {
        this.setState({
          courses: courseList
        })
      })
  }

  render() {                
    return (
      <div className="CourseList">
        {this.state.courses.map((element, index) => {
          return (
            <Link to={`/courses/${element._id}`}><CourseCard key={element._id} name={element.courseName} img={element.image} price={element.price} /> </Link>
          )
        })}
        
      </div>);
  }
}

export default CourseList;
