import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import CourseList from './CourseList';

import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import api from '../api';
import logo from '../logo.svg';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {                
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Countries</h1>
          <Link to="/">Home</Link> 
          {!api.isLoggedIn() && <Link to="/signup">Signup</Link> }
          {!api.isLoggedIn() && <Link to="/login">Login</Link> }
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }
          <Link to="/profile">Profile</Link> 
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:category" exact component={CourseList} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>        
      </div>
    );
  }
}

export default App;
