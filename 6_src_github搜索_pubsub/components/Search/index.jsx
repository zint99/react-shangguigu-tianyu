import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

class Search extends Component {

    Search = () => {
        // 获取用户输入
        const { value } = this.keyWordNodes
        // 发布消息
        PubSub.publish('My Data', {
            isFirst: false,
            isLoading: true
        })
        // 发送网络请求
        axios({
            method: 'GET',
            url: `https://api.github.com/search/users?q=${value}`
        }).then((res) => {
            // 发布消息
            PubSub.publish('My Data', {
                isLoading: false,
                users: res.data.items
            })
        }).catch((reason) => {
            // 发布消息
            PubSub.publish('My Data', {
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