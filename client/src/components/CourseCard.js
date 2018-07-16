import React, { Component } from 'react';
import api from '../api';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import './Secret.css';

class CourseCard extends Component {
  constructor(props) {
    super(props)
    
    
  }
  componentDidMount() {

  }
  render() {                
    return (
      <div className="CourseCard">
     <p>{this.props.name}</p>
     <p>{this.props.img}</p>
     <p>{this.props.price}</p>
        
      </div>
    );
  }
}

export default CourseCard;
