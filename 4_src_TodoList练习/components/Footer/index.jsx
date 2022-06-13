import React, { Component } from 'react';
import './index.css';


export default class Footer extends Component {

    handleChange = () => {
        const { setAllTodoDone } = this.props
        return (e) => {
            setAllTodoDone(e.target.checked)
        }
    }

    deleteAll = () => {
        const { deleteAllDoneTodo } = this.props
        return () => {
            deleteAllDoneTodo()
        }
    }

    render() {
        const { todos, } = this.props
        const doneTodos = todos.filter(
            (item) => {
                return item.done == true
            }
        )
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={todos.length == doneTodos.length && todos.length != 0} onChange={this.handleChange()} />
                </label>
                <span>
                    <span>已完成{doneTodos.length}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.deleteAll()}>清除已完成任务</button>
            </div>
        )
    }
}
