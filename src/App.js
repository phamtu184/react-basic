import React, { Component } from 'react'; 
import './App.css';
import './component/TodoItem'
import TodoItem from './component/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
      'hoc react',
      'uong nuoc',
      'an com'
    ];
  }
  render(){
    return (
      <div className="App">
        {
          this.todoItems.map((item, index)=> <TodoItem key = {index} title = {item}></TodoItem>)
        }
      </div>
    );
  }
}

export default App;


