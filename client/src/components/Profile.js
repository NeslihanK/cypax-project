import React, { Component } from 'react';
import CourseCard from './CourseCard';
// import {Link} from 'react-router-dom';
import api from '../api';
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
        <h2>Profile</h2>
        <h3>Hello {this.state.profile.name} lern something awesome!!! </h3>
        <p>{this.state.profile.name}</p>
        <p>{this.state.profile.email}</p>
        {this.state.profile._favorites.map(element => {
          return (<div>
            <CourseCard key={element._id} name={element.courseName} img={element.image} price={element.price} link={element.link}/> 
            <button onClick={() => {this.handleClick(element._id)}} >Delete</button>

            </div>)
        })}
        

      </div>
    );
  }
}

export default Profile;
