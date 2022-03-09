const defaultState = {
    inputValue: 'Write Something',
    list: [
        'cluo',
        'meixi',
        'neimaer'
    ]
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if (action.type === 'addItem') { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    //关键代码------------------end----------
    // react项目中的reducer  

    if (action.type === 'info') { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.usermobile = action.info
        return newState
    }
    return state
}