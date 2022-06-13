import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

// input输入任务,回车后将输入的内容添加到App组件的state中

export default class Header extends Component {

    // 回车事件
    // 不使用ref,使用事件对象event
    enter = (e) => {
        // if (e.keyCode === 13) //当按下回车时,少用keyCode
        //     console.log(e.target.value,);
        const { target } = e

        if (e.key === 'Enter') {
            // 如果输入空字符串,则弹出警告
            if (target.value.trim() === '') {
                alert('请勿输入空字符串!')
                return
            }
            else {
                // addTodo是App组件传给Header的函数,存储在props中,作用是将参数todoObj存到App的state的todos中
                const todoObj = { id: nanoid(), name: target.value, done: false }
                this.props.addTodo(todoObj)
                // 添加完后重置input输入框
                target.value = ''
            }
        }


    }

    handleClick = () => {

        const { setAllSelectFlag } = this.props
        return setAllSelectFlag
    }

    render() {
        return (
            <div className="todo-header">
                {/* 按下回车,绑定事件onKeyUp */}
                <input onKeyUp={this.enter} onClick={this.handleClick()} type="text" placeholder="请输入你的任务名称，按回车确认" />
            </div>
        )
    }
}
