import React, { Component } from 'react';
import '../style/style.css';
import classNames from 'classnames/bind';
class TodoItem extends Component{
  render(){
    const { item } = this.props;
    let classList = classNames({
      'TodoItem': true,
      'Todo-complete': item.isComplete
    });
    return(
      <div className={classList}>
        <p>{ this.props.item.title }</p>
      </div> 
    );
  }
}

export default TodoItem;