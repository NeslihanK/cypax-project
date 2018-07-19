import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import api from '../api';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
    api.loadUser();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {                
    return (
      <div className="App">
      <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarBrand><Link to="/">Home</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink>{!api.isLoggedIn() && <Link to="/signup">Signup</Link> }</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>{!api.isLoggedIn() && <Link to="/login">Login</Link> }</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>{api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }</NavLink>
              </NavItem> <NavItem>
                <NavLink>{api.isLoggedIn() && <Link to="/profile">Profile</Link>}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/category/:category" exact component={CourseList} />
          <Route path="/courses/:courseId" exact component={CourseDetail} />

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