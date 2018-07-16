import React, { Component } from 'react';
import api from '../api';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import './Secret.css';

class CourseList extends Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    // api.getCourseList(this.props.match.params.category)
    //   .then(courseList => {
    //     console.log("Inside didMount xxxxxxxxx", courseList)
    //   })
  }

  render() {                
    return (
      <div className="CourseList">
        <h2>{this.props.match.params.category}</h2>
        <p></p>
      </div>
    );
  }
}

export default CourseList;
