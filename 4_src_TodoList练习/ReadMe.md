## TodoList案例知识点






# 流程
1.List-中动态渲染 app state todos数据
    >注意每个li都需要唯一的key，设置为todo.id

2.Header-input输入框输入todo，按下enter键(onKeyUp)增添到List
    >addTodo-修改App state中todos状态，将函数传给Header
    >按下Enter后清空input输入框
    >若输入空字符串。提示

3.Item
    3.1 鼠标
        >鼠标移入Item高亮并且显示delete button
    3.2 checkbox
        >若done:true 则checked=true
        >checkbox 改变勾选影响App state中todo.done--changeTodo(App传给Item)
    3.3 delete button
        >点击delete button 删除对应todo--deleteTodo(App传给Item)
        >提示信息

4.footer
    4.1 信息显示
        >显示总todo数，已完成todo数
    4.2 checkbox
        >点击checkbox，修改所有todo的done--setAllTodoDone
    4.3 delete button
        >点击delete button 删除所有done:true
        >若无已完成任务，alert
    