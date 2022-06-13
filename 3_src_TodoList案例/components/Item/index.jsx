import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        mouse: false //鼠标移入移出标志,mouse状态值可以影响列表背景是否高亮,删除按钮是否显示
    }

    //flag标识是鼠标移入还是鼠标移出
    handleMouse = (flag) => {

        return () => {

            this.setState({
                mouse: flag     //鼠标移入移出标志
            })
        }
    }
    // 处理input单选框勾选
    handleChange = (id) => {
        const { changeTodo, getAllSelectFlag } = this.props
        return (e) => {
            // console.log(id, e.target.checked);
            changeTodo(id, e.target.checked)
            getAllSelectFlag()
        }
    }
    // 
    handleDelete = (id) => {
        const { deleteTodo } = this.props
        return () => {
            if (window.confirm('你确定删除吗?')) {
                deleteTodo(id)
            } else {
                return
            }
        }
    }


    render() {
        // props中存储由List组件传递的value值
        // 解构赋值name
        const { name, id, done, } = this.props
        const { mouse } = this.state

        return (
            // li上发生mouseenter时,调用handleMouse函数,并且传入参数true/发生mouseleave使,调用传参false
            // 鼠标移入,背景高亮且显示删除按钮  事件onMouseMove
            // 鼠标移出,恢复
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/* 如果done,则check=checked */}
                    {/* 获取input节点 */}
                    {/* 实现勾选框修done状态--onchange事件 */}
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    {/* 显示App组件state中todo的name值 */}
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
