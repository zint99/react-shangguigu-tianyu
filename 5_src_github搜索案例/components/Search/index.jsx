import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    Search = () => {
        const { isLoading, isErr, updateAppState } = this.props

        // 获取用户输入
        const { value } = this.keyWordNodes
        updateAppState({
            isFirst: false,
            isLoading: true
        })
        // 发送网络请求
        axios({
            method: 'GET',
            url: `https://api.github.com/search/users?q=${value}`
        }).then((res) => {
            updateAppState({
                isLoading: false,
                users: res.data.items
            })
        }).catch((reason) => {
            updateAppState({
                isLoading: false,
                err: reason.message
            })
        })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordNodes = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.Search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;