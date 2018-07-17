import React, { Component } from 'react';
import api from '../api';
import CourseCard from './CourseCard';
import { Link} from 'react-router-dom';
// import './Secret.css';

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      search: " "
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  componentDidMount() {
    api.getCourseList(this.props.match.params.category)
      .then(courseList => {
        this.setState({
          courses: courseList,
        })
      })
    
  }

  render() {    


    return (

      <div className="CourseList">
        <input  type="text" maxLength="40"
        
          value = {this.state.search} 
          onChange = {this.updateSearch.bind(this)} /> <br/>
          <br/>
          {this.state.courses.filter(e => {return e.courseName.toLowerCase().includes(this.state.search.toLowerCase())}).map((element, index) => {
          return (
            <Link to={`/courses/${element._id}`}><CourseCard key={element._id} name={element.courseName} img={element.image} price={element.price} /> </Link>
          )
        })}
        
      </div>);
  }
}

export default CourseList;
