import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';
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
          profile: data.answerToLifeTheUniverseAndEverything
        })
      })
  }
  render() {                
    return (
      <div className="Profile">
        <h2>Profile</h2>
        {this.state.profile}
      </div>
    );
  }
}

export default Profile;
