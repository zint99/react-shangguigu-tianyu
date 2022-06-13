import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {

    handleEnter = () => {
        return (e) => {
            if (e.key === 'Enter') {
                if (e.target.value.trim() == '') {
                    window.alert('请勿输入空字符串')
                    return
                } else {
                    const { addTodo } = this.props
                    // console.log('按下Enter');
                    const todoObj = { id: nanoid(), name: e.target.value, done: false }
                    addTodo(todoObj)
                    e.target.value = ''
                }
            }
        }
    }

    render() {

        return (
            <div className="todo-header">
                <input onKeyUp={this.handleEnter()} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
