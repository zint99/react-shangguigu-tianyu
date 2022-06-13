import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    // state
    state = {
        mouse: false
    }

    // 处理鼠标移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }
    // 处理checkbox点击
    handleClick = (done, id) => {
        const { changeTodo } = this.props
        return () => {
            changeTodo(done, id)
        }
    }
    // 处理delete按钮点击
    handleDelete = (id) => {
        const { deleteTodo } = this.props
        return () => {
            if (window.confirm('?')) {
                deleteTodo(id)
            }
        }
    }

    handleChange = () => {
        const { setAllDoneFlag } = this.props
        return () => {
            setAllDoneFlag()
        }
    }

    render() {
        const { todos, name, id, done, AllDoneFlag } = this.props
        const { mouse } = this.state


        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange()} onClick={this.handleClick(done, id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
