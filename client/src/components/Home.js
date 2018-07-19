import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
           
    return (
      

 
   

      <div className="Home">

        
        <div className="Banner">

        <img src="../../images/Shutter1.png" width="100%" heigt="" /> <br/>
        </div>

        <div className="col">

        <Link to="/category/JS"><img src="../../images/JS.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/CSS"><img src="../../images/CSS.png" className="img-category"/></Link><br/>
        </div>
        <div className="col">

        <Link to="/category/PYTHON"><img src="../../images/python.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/JAVA"><img src="../../images/Java.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/PHP"><img src="../../images/PHP.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/C++"><img src="../../images/C++.png" className="img-category"/></Link> <br/>
        </div>
      </div>
    );
  }
}

export default Home;