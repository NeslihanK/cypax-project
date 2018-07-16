import React, { Component } from 'react';
import api from '../api';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
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
        <p>{this.state.course.courseName}</p>
        <p>{this.state.course.image}</p>
        <p>{this.state.course.category}</p>
        <p>platform: {this.state.course._platform.platformName}</p>
        <p>{this.state.course.link}</p>
        <p>{this.state.course.price}</p>
        <p>{this.state.course.rating}</p>
        <button onClick={this.handleClick.bind(this)} >Add to favorites</button>

      </div>
    );
  }
}

export default CourseDetail;
