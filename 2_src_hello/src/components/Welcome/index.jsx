import React, { Component } from 'react';
import welcome from './index.module.css'

class index extends Component {
    render() {
        return (
            <h2 className={welcome.title}>Welcome!</h2>
        );
    }
}

export default index;