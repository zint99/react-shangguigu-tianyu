import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App = (props) => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 创建路由链接 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path='/about' element={<About />}></Route>
                                <Route path='/home' element={<Home />}></Route>
                                <Route path='/' element={<Navigate to={'/home'} />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;