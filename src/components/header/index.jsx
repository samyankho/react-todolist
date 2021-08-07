import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (e) =>{
        if(e.keyCode !== 13)  return
        if(e.target.value.trim()===''){
            alert('input can not be empty!')
            return
        }
        const todoObj = {id: nanoid(), name: e.target.value, done: false}
        this.props.addTodo(todoObj)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
