import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

// 外壳组件App
export default class App extends Component {
    // 初始化状态,状态在哪里,操作状态的方法就在哪里
    state = {
        // 父组件App的状态中存储todos,全选标识符allSelectFlag
        todos: [
            { id: '001', name: 'eat', done: true },
            { id: '002', name: 'sleep', done: true },
            { id: '003', name: 'code', done: false },
            { id: '004', name: 'else', done: false },
        ],
        allSelectFlag: false
    }

    // 用于header，添加todo
    // addTodo作为参数传递给Header组件，在Header组件中得到todoObj，再合并成新的todos
    addTodo = (todoObj) => {
        // 获取todos
        console.log(todoObj);
        const { todos } = this.state

        // react-state不支持数组方法
        // this.setState({
        //     todos: todos.unshift(todoObj)
        // })

        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    // 用于list再传item，根据勾选情况改变todos中指定id的done
    // 最开始的错误写法
    // const itemChanged = todos.find((item) => {
    // item.id == id
    // return item
    // })
    // 
    changeTodo = (id, done) => {
        const { todos } = this.state
        const itemChanged = todos.find((item) => {
            return item.id === id
        })
        itemChanged.done = done
        this.setState({
            todos: todos
        })
    }
    // 用于list再传item，点击delete删除指定id
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(
            (item) => {
                return item.id !== id
            }
        )
        this.setState({
            todos: newTodos
        })
    }
    // 用于Footer，点击delete删除全部已完成任务
    deleteAllDoneTodos = () => {
        const { todos } = this.state
        const newTodos = todos.filter((item) => {
            return item.done == false
        })

        this.setState({
            todos: newTodos
        })
    }
    // 用于Footer，点击勾选全部任务，allSelectFlag相互影响
    selectAllTodo = (flag) => {
        const { todos } = this.state
        const newTodos = todos.map((item) => {
            item.done = flag
            return item
        })
        this.setState({
            todos: newTodos,
            allSelectFlag: flag
        })
    }

    // 用于Item，每次勾选都判断并设置allSelectFlag
    // 如果todos中所有done为true,传递一个true给footer，勾选checkbox
    // 如果todos中任意一个done为false，则传false给footer，取消勾选checkbox
    getAllSelectFlag = () => {
        const { todos, } = this.state
        const newDoneTodos = todos.filter(item => item.done == true)
        if (newDoneTodos.length == todos.length) {
            this.setState({
                allSelectFlag: true
            })
        } else {
            this.setState({
                allSelectFlag: false
            })
        }
    }

    setAllSelectFlag = () => {
        // 如果todos为空，则allSelectFlag: false
        console.log('setAllSelectFlag');
        const { todos } = this.state
        if (todos.length == 0) {
            this.setState({
                allSelectFlag: false
            })
        }
    }

    render() {
        const todos = this.state.todos
        // todoDoneNum为已完成任务数，todosNum为总任务数
        let todoDoneNum = 0
        for (let i of todos) {
            if (i.done === true) {
                todoDoneNum++
            }
        }
        // todoDoneNum的reduce写法
        // let todoDoneNum = todos.reduce(
        //     (pre, todo) => {
        //         return pre + (todo.done ? 1 : 0)
        //     }, 0
        // )
        // todoDoneNum的filter写法
        // let todoDoneNum = todos.filter((item) => {
        //     return item.done == true
        // }).length

        return (
            <div id="rooter">
                <div className="todo-container">
                    <div className="todo-wrap">

                        <Header addTodo={this.addTodo} setAllSelectFlag={this.setAllSelectFlag} />
                        {/* 将todos作为参数传递给子组件List,在List的props中 */}
                        <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} getAllSelectFlag={this.getAllSelectFlag} />
                        <Footer selectAllTodo={this.selectAllTodo} deleteAllDoneTodos={this.deleteAllDoneTodos} todosNum={todos.length} todoDoneNum={todoDoneNum} allSelectFlag={this.state.allSelectFlag} />
                    </div>
                </div>
            </div>
        )
    }
}