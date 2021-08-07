import React, { Component } from "react";
// import PropTypes from 'prop-types'
import './index.css'

export default class item extends Component {

  state = {
    mouse: false
  }

  handleMouse= (flag) =>{
    return ()=>{
      this.setState({mouse: flag})
    }
  }

  handleCheck = (id) =>{
    return (e) => {
      console.log(id, e.target.checked)
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = (id) =>{
    // console.log(id)
    if(window.confirm('confirm delete?')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {name, done, id} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : "white"}}
      onMouseEnter={this.handleMouse(true)} 
      onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={() => this.handleDelete(id)}
        style={{ display: mouse ? 'block' : "none" }}>
          删除
        </button>
      </li>
    );
  }
}
