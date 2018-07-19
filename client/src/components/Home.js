
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
           
    return (
      <div className="Home">
        <Link to="/category/JS"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width="20%" height="20%"/></Link> <br/>
        <Link to="/category/CSS"><img src="https://appendto.com/wp-content/uploads/2016/05/css3-420x210.jpg" width="40%" height="40%"/></Link><br/>
        <Link to="/category/PYTHON"><img src="https://www.grimm-jaud.de/images/stories/pythonLogo.png" width="40%" height="40%" /></Link> <br/>
        <Link to="/category/JAVA"><img src="https://homepages.thm.de/~dilg93/java/background.jpg" width="40%" height="40%" /></Link> <br/>
        <Link to="/category/PHP"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png" width="40%" height="40%" /></Link> <br/>
        <Link to="/category/C++"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/2000px-ISO_C%2B%2B_Logo.svg.png" width="30%" height="30%" /></Link> <br/>
      </div>
    );
  }
}

export default Home;

