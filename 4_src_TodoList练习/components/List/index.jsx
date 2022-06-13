import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class List extends Component {

    render() {
        const { todos, changeTodo, deleteTodo, AllDoneFlag, setAllDoneFlag } = this.props


        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} AllDoneFlag={AllDoneFlag} {...todo} todos={todos} changeTodo={changeTodo} deleteTodo={deleteTodo} setAllDoneFlag={setAllDoneFlag} />
                    })
                }

            </ul>
        )
    }
}
