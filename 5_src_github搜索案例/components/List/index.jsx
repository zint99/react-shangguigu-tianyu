import React, { Component } from 'react';
import './index.css';

class List extends Component {


    render() {
        const { users, isFirst, isLoading, err } = this.props
        if (isFirst) {
            return (
                <h2>Enter name to search</h2>
            )
        } else if (err) {
            return (
                <h2 style={{ color: "red" }}>{err}</h2>
            )
        } else if (isLoading) {
            return <h2>Loading~~~~~~</h2>
        } else if (users.length == 0) {
            return <h2>搜索结果为0！</h2>
        } else {
            return (
                <div className="row">
                    {users.map((item) => {
                        return (<div key={item.id} className="card">
                            <a rel="noreferrer" href={item.html_url} target="_blank">
                                <img alt="avatar" src={item.avatar_url} style={{ width: '100px' }} />
                            </a>
                            <p className="card-text">{item.login}</p>
                        </div>)
                    })}
                </div>
            );
        }
    }
}

export default List;