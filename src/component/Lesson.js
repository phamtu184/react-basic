import React, { Component } from 'react';
import '../style/style.css';
//import classNames from 'classnames/bind';
class Lesson extends Component{
  render(){
    return(
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Active list item
        <span className="badge badge-secondary badge-pill">pill1</span>
      </li>
    )
  }
}

export default Lesson;