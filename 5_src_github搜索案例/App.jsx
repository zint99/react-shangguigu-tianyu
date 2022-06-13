import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateAppState = (usersObj) => {
        this.setState(usersObj)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState} {...this.state} />
                    <List {...this.state} />
                </div>
            </div>
        );
    }
}

export default App;