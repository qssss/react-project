// 引用组件
// 父子通信

// 父组件向子组件传递数据：props
// 自组件像父组件传递数据：事件回调  (而vue中是通过自定义函数来实现的)

import React from 'react';

//通过类创建的组件
class Header extends React.Component { //子组件
    constructor(props) {
        super(props);
        this.message = '来自子组件的传话';
        //默认情况下在constructor中是没办法拿到的 因为constructor默认是立即执行的 所以我们需要在构造器中传入props 这样就可以拿到传进来的值
        console.log(this.props.message) 
    }
    render() {
        this.props.handleGiveMsgToParent(this.message); //触发回调
        return (
            <div>
                这是子组件
                <div>这是一个header组件: {this.props.message}</div>
                {/* 单插槽 */}
                <div>{ this.props.children }</div> 
                {/* 多插槽 */}
                <div>{ this.props.left }</div>
                <div>{ this.props.right }</div>
            </div>
        )
    }
}

class Title extends React.Component { //父组件
    constructor() {
        super();
        this.message = '来自父组件的问候'
        // this.handleGiveMsgToParent = this.handleGiveMsgToParent.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <div>这是一个title（父组件）组件</div><br/>
                <div className="box">
              
                    {/* 多插槽 */}
                    <Header left={<span>在左</span>} right={<span>在右</span>} handleGiveMsgToParent={this.handleGiveMsgToParent} message = {this.message}></Header><br/>
                    {/* 单插槽 */}
                    <Header handleGiveMsgToParent={this.handleGiveMsgToParent} message = {this.message}>这是要显示的内容</Header><br/>
                </div>
            </React.Fragment>
        )
    }
    
    handleGiveMsgToParent(msg) {
        console.log(msg)
    }
}


//通过函数创建的组件
function Foo(props) {
    return (
        <div>这是一个foo组件:{ props.message }</div>
    )
}

function Bar() {
    return(
        <div>这是一个bar组件<br/><Foo message = "要接受的值"/></div>
    )
}

export default Title;
