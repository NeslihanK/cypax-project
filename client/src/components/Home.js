
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
           
    return (
      <div className="Home">
        <div className="col">

        <Link to="/category/JS"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/CSS"><img src="https://appendto.com/wp-content/uploads/2016/05/css3-420x210.jpg" className="img-category"/></Link><br/>
        </div>
        <div className="col">

        <Link to="/category/PYTHON"><img src="https://www.grimm-jaud.de/images/stories/pythonLogo.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/JAVA"><img src="https://homepages.thm.de/~dilg93/java/background.jpg" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/PHP"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png" className="img-category"/></Link> <br/>
        </div>
        <div className="col">

        <Link to="/category/C++"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/2000px-ISO_C%2B%2B_Logo.svg.png" className="img-category"/></Link> <br/>
        </div>
      </div>
    );
  }
}

export default Home;

