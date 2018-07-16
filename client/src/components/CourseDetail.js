import React, { Component } from 'react';
import api from '../api';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import './Secret.css';

class CourseDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
        course: {}
    }
    
    
  }
  componentDidMount() {
    api.getCourseDetail(this.props.match.params.courseId)
    .then(courseDetail => {
        this.setState({
          course: courseDetail
        })
      })
  }

  render() {                
    return (
      <div className="CourseDetail">
        <p>{this.state.course.courseName}</p>
        <p>{this.state.course.image}</p>
        <p>{this.state.course.category}</p>
        <p>{this.state.course._platform}</p>
        <p>{this.state.course.link}</p>
        <p>{this.state.course.price}</p>
        <p>{this.state.course.rating}</p>
      </div>
    );
  }
}

export default CourseDetail;
