import React, { Component} from 'react';
import { createStore,combineReducers } from 'redux';

// action:
//     1.type 任务的名字（大写）
//     2.payload 载荷（传递进来的数据）
// getState(): redux中用来获取共享状态的，该方法位于store对象下
// dispatch(): 派发redux的任务的，来修改redux函数中的状态，该方法位于store对象下
// subscribe()：可以监听数据的变化 一旦数据变化就会触发对应的回调函数

// react中setState()可以触发render方法
function reduxFunc(state,action) { //纯函数
    if(action.type === 'CHANG_COUNT') {
        let cloneState = {...state}
        cloneState.count += action.payload;
        return cloneState;
    } else if(action.type === 'CHANG_LIST') {
        let cloneState = {...state}
        cloneState.list = [...cloneState.list,action.payload]
        // cloneState.list.push(action.payload);
        return cloneState;
    }
    else{
        return state
    }
}

let store = createStore(reduxFunc,{
    count: 5,
    list: [1111,2222,3333,4444,5555]
})

class ReduxDom extends Component {
    constructor() {
        super();
        store.subscribe(()=>{
            this.setState({});
        })
        this.handleAdd = this.handleAdd.bind(this);
    }
    render() {
        return(
            <div>
                <h1>redux语法</h1>
                <div>
                    <button onClick={()=>{this.handleChange(1)}}>+</button>
                    {store.getState().count}
                    <button onClick={()=>{this.handleChange(-1)}}>-</button>
                </div>
                <br/>
                <input type="text" onKeyDown={this.handleAdd} />
                <ul>
                    {
                        store.getState().list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleChange(num) {
        store.dispatch({type: "CHANG_COUNT", payload: num})
    }
    handleAdd(ev) {
        if(ev.keyCode === 13) {
            store.dispatch({type: "CHANG_LIST", payload: ev.target.value})
        }
    }
}
export default ReduxDom;


