import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
        <Link to="/category/JS">JS</Link> <br/>
        <Link to="/category/CSS">CSS</Link> <br/>
        <Link to="/category/PYTHON">PYTHON</Link> <br/>
        <Link to="/category/JAVA">JAVA</Link> <br/>
        <Link to="/category/PHP">PHP</Link> <br/>
        <Link to="/category/C++">C++</Link> <br/>
      </div>
    );
  }
}

export default Home;
