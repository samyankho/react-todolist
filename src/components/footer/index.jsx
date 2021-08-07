import React, { Component } from "react";
import './index.css'

export default class footer extends Component {

  handleCheckAll = (e)=>{
    this.props.checkAllTodo(e.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo)=> pre + (todo.done?1:0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onClick={this.handleCheckAll} 
          defaultChecked={doneCount===todos.length && todos.length!==0 ? true:false}/>
        </label>
        <span>
          <span>completed {doneCount}</span> / total {todos.length}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear completed tasks</button>
      </div>
    );
  }
}
