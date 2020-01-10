// 1.state是一个状态机 实现react中数据的响应式管理
// 2.在react中改变state值需要用setState这个方法 内部对state做了异步处理 合并多次执行时候的性能问题
// 3.并不是所有的setState都是异步的，当调用原生的异步和事件的时候都是同步的了，并且也不会进行合并操作了，setTimeout
// 4.setState有两个参数
//     第一个参数：可以是对象 也可以是函数
//     第二个参数：异步的回调函数
// 5.不要直接修改state 然后再去赋值 正确做法是不修改state
// 6.注意数组、对象的赋值
//      var arr = [111,222];
//      var arr1 = arr;
//      arr1.push(333,444);
//      console.log(arr) //[111, 222, 333, 444]
// 7.一旦执行了setState方法 就会触发render方法 不仅触发当前组件的render 还会触发子组件的render方法
// 8.
// 类式组件：有状态组件 -> 可以写state 和 生命周期（功能强）
// 函数式组件：无状态组件 -> 不可以写state 和 生命周期（性能好）
// 9.props和state的区别？
//     props属性是做父子通信的 而且是只读的 （不违背单向数据流）
//     state属性是写在组件内部的 用于响应式渲染的 可读可写

import React, { Component } from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'hello React!',
            count: 0,
            list:['11','22','33']
        }
    }
    render() {
        return (
            <React.Fragment>
                <div onClick = {this.handleChange.bind(this)}> { this.state.msg } , { this.state.count }</div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={()=>{this.handleAdd()}}>添加</button>
            </React.Fragment>
        )
    }
    handleChange() {
        // setTimeout(() => { 
        //     this.setState({
        //         msg: 'hello World',
        //         count: this.state.count + 1
        //     })
        //     console.log(this.state.count)
        // }, 3000);

        // this.setState({
        //     msg: 'hello World',
        //     count: this.state.count + 1
        // },()=>{
        //     console.log(this.state.count)
        // })

        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    handleAdd() {
        // 第一种方法
        //setState中传入方法的时候 必须返回一个对象
        // this.setState((prevState)=>{
        //     return {
        //         list:[...prevState.list,'444']
        //     }
        // })

        // 第二种方法 不要直接赋值 直接赋值在内存中的指向是一样的
        // let cloneList = [...this.state.list];
        // cloneList.push('444')
        // this.setState({
        //     list: cloneList
        // })

        // 第三种方法
        let cloneList = this.state.list.concat();
        cloneList.push('444')
        this.setState({
            list: cloneList
        })
    }
}

export default Title;