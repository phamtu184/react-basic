import React, { Component } from 'react';
import '../style/style.css';
import Lesson from './Lesson';
//import classNames from 'classnames/bind';
class Course extends Component{
  infoCourse() {
    const isFree = this.props.free;
    if(isFree){
      return <div className="card-footer">
              <button type="button" className="btn btn-primary">More info</button>
            </div>
    }
    else{
      return <div className="card-footer">
            <button type="button" className="btn btn-primary disabled" aria-disabled="true" disabled>More info</button>
          </div>
    }
  }
  render(){
    return(
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">{this.props.name}</h3>
            <p>{this.props.time}</p>
            <ul className="list-group">
              <Lesson></Lesson>
              <Lesson></Lesson>
              <Lesson></Lesson>
            </ul>
            <p>{this.props.desc}</p>
          </div>
            {this.infoCourse()}
        </div>
      </div>
    )
  }
}

export default Course;