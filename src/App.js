import React, { Component } from 'react'; 
import './style/style.css';
//import TodoItem from './component/TodoItem';
import Course from './component/Course';

class App extends Component {
  // constructor(){
  //   super();
  //   this.todoItems = [
  //     {title:'hoc react', isComplete: true},
  //     {title:'uong nuoc', isComplete: false},
  //     {title:'an com', isComplete: true}
  //   ];
  // }
  render(){
    const items =[
      {
        name: 'ReactJS',
        free: true,
        time: 35,
        desc: 'React is very simple'
      },
      {
        name: 'Angular',
        free: false,
        time: 45,
        desc: 'Angular is very simple'
      },
      {
        name: 'NodeJS',
        free: true,
        time: 25,
        desc: 'NodeJS is very simple'
      }
    ]
    const listItems = items.map((item, index)=>
      <Course name={item.name} time={item.time} free={item.free} desc={item.desc} key={index}></Course>
    );
    return (
    //   <div className="App">
    //     {
    //       this.todoItems.length > 0 && this.todoItems.map((item, index)=>
    //       <TodoItem key={index} item={item}></TodoItem>)
    //     }
    //     {
    //       this.todoItems.length === 0 && 'Nothing else'
    //     }
    //   </div>
    <div className="container">
      <div className="row">
        {/* <Course name='ReactJS' isFree={true}></Course>
        <Course name='AngularJS' isFree={false}></Course>
        <Course name='VueJS' isFree={true}></Course> */}
        {listItems}
      </div>
    </div>
      
    );
  }
}

export default App;


