// constructor -> componentWillMount -> render -> componentDidMount

// PureComponent 智能选择是否渲染子组件
import React, { Component, PureComponent } from 'react';

class Children extends Component {
    constructor() {
        super()
        this.timer = setInterval(() => {
            console.log('11')
        }, 1000);
    }
    render() { 
        console.log('子元素render',this.props.count)
        return (
            <div className="box">
                <h1 onClick = { this.props.handleAdd }>{ this.props.msg }</h1>
                <button>{ this.props.count }</button>
            </div>
        )
    }
    componentWillReceiveProps(props) {  //子组件将要接受数据
        console.log('props:',props)
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps) {
        console.log('nextProps的值是',nextProps)
        if(nextProps.count === this.props.count) {
            return false;
        } else {
            return true;
        }
    }
    componentWillUnmount() { //组件销毁的生命周期  清除定时器或者事件
        console.log('componentWillUnmount')
        clearInterval(this.timer);
    }
}

class Life extends React.Component {
    constructor() { //实例化对象
        super()
        console.log('constructor')
        this.state = {
            msg: 'hello world',
            count: 0
        }
        setTimeout(() => {
           this.setState({
               msg: 'hello react'
           }) 
        }, 3000);
        this.handleAdd = this.handleAdd.bind(this);
    }
    render() { // 组件渲染
        console.log('render')
        return ( 
            <div>
                <div> { this.state.msg } </div>
                {!this.state.count && <Children msg = { this.state.msg } count = { this.state.count } handleAdd={ this.handleAdd }/>}
            </div>
        )
    }
    componentWillMount() { //即将进入dom
        console.log('componentWillMount')
    }
    componentDidMount() { //已经进入dom
        console.log('componentDidMount')
    }
    componentWillUpdate() { //组件即将重新渲染
        console.log('componentWillUpdate')
    }
    componentDidUpdate() { //组件重新渲染完成
        console.log('componentDidUpdate')
    }
    shouldComponentUpdate() { //判断是否需要重新渲染组件 
        console.log('shouldComponentUpdate')
        return true;
    }
    handleAdd() {
        this.setState({
            count: 1
        })
    }
}

export default Life