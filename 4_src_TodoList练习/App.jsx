import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './index.css';



export default class App extends Component {
    // state中存放todos
    state = {
        todos: [
            { id: '001', name: 'work', done: true },
            { id: '002', name: 'sleep', done: true },
            { id: '003', name: 'study', done: false }
        ],
        AllDoneFlag: false
    }

    // 用于输入框enter增加todo，参数todoObj是输入框enter取得的参数
    addTodo = (todoObj) => {
        const { todos } = this.state

        this.setState({
            todos: [...todos, todoObj,]
        })
    }
    // 用于在checkbox改变时相应地改变对应ID的done
    changeTodo = (done, id) => {
        const { todos } = this.state
        const doneTodo = todos.find(
            (item) => {
                return item.id == id
            }
        )
        doneTodo.done = !done
        this.setState({
            todos: todos
        })
    }

    // 用于点击delete button时删除对应ID的todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(
            (item) => {
                return item.id != id
            }
        )
        this.setState({
            todos: newTodos
        })
    }
    // 用于footer的checkbox调整所有todo.done
    setAllTodoDone = (flag) => {
        const { todos } = this.state
        const newTodos = todos.map(
            (item) => {
                item.done = flag
                return item
            }
        )
        this.setState({
            todos: newTodos,
            AllDoneFlag: flag
        })
    }
    // 用于Item checkbox改变时setAllDoneFlag
    setAllDoneFlag = () => {
        const { todos } = this.state
        const doneTodo = todos.filter(
            (item) => {
                return item.done == true
            }
        )
        if (doneTodo.length == todos.length) {
            this.setState({
                AllDoneFlag: true
            })
        } else {
            this.setState({
                AllDoneFlag: false
            })
        }
    }
    // 用于footer的delete button
    deleteAllDoneTodo = () => {
        const { todos, } = this.state
        const newTodos = todos.filter(
            (item) => {
                return item.done == false
            }
        )
        if (newTodos.length == todos.length) {
            window.alert('清除完毕！暂无已完成任务')
            return
        }

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos, AllDoneFlag } = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} AllDoneFlag={AllDoneFlag} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} setAllDoneFlag={this.setAllDoneFlag} />
                    <Footer todos={todos} AllDoneFlag={AllDoneFlag} setAllTodoDone={this.setAllTodoDone} deleteAllDoneTodo={this.deleteAllDoneTodo} />
                </div>
            </div>
        )
    }
}
