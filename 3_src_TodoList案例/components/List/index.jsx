import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    render() {
        // 接收到父组件传递的todos，存储在props对象中
        // typeof todos -> Array
        // console.log(this.props.todos, this.props.todos instanceof Array);
        // 将props对象中的todos解构赋值
        const { todos, changeTodo, deleteTodo, getAllSelectFlag } = this.props


        return (
            <ul className="todo-main">
                {/* 每有一个todo就返回一个Item组件 */}
                {/* 将每个todo.name传递给Item */}

                {/* 若一个一个传递,如果参数很多则效率低 */}
                {/* {todos.map((todo) => <Item key={todo.id} name={todo.name} id={todo.id} done={todo.done} />)} */}
                {
                    todos.map(
                        (todo) => {
                            // 批量传参数{...todo},并且渲染todos相同数量的Item组件
                            return <Item key={todo.id} {...todo} todos={todos} changeTodo={changeTodo} deleteTodo={deleteTodo} getAllSelectFlag={getAllSelectFlag} />
                        }
                    )
                }
            </ul>
        )
    }
}
