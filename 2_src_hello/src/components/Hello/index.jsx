import React, { Component } from 'react';
import hello from './index.module.css'

class index extends Component {
    render() {
        return (
            <h1 className={hello.title}>hello,React!</h1>
        );
    }
}

export default index;