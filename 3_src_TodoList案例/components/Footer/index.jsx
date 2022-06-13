import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleChange = () => {
        const { selectAllTodo, } = this.props
        return (e) => {
            //    fun(e.target.checked)
            const flag = e.target.checked
            console.log(flag);
            selectAllTodo(flag)
        }
    }


    render() {
        const { todosNum, todoDoneNum, allSelectFlag, deleteAllDoneTodos, } = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={allSelectFlag && todosNum != 0} onChange={this.handleChange()} />
                </label>
                <span>
                    <span>已完成{todoDoneNum}</span>
                    /全部{todosNum}
                </span>
                <button onClick={deleteAllDoneTodos} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
