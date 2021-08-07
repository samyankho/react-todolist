import "./App.css";
import Header from "./components/header";
import List from "./components/list";
import Footer from './components/footer'
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    todos: [
      {id: '001', name: 'eat', done: true},
      {id: '002', name: 'sleep', done: true},
      {id: '003', name: 'coding', done: false},
    ]
  }

  addTodo = (todoObj) => {
    const newTodos = this.state.todos
    newTodos.unshift(todoObj)
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((item) => {
      if(item.id === id)  return {...item,done}
      else  return item
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) =>{
    const {todos} = this.state
    const newTodos = todos.filter((item)=>{return item.id!==id})
    this.setState({todos: newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((item) => {
      return {...item, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((item) => {return !item.done})
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>

          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>

          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
