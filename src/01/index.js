//主组件
// react中写一个类，一个类就是一个组件
// 直接在js中写入xhtml,就是jsx语法
// 1.xhtml:单标签必须闭合
// 2.jsx必须最外层只有一个跟节点
// 3.要求图片必须添加alt上个月属性
// 4.js中为了防止跟js代码冲突，class -> className 表单for -> htmlFor
// 5.组件名字的第一个字母必须大写，无论是调用还是定义
// 6.两种创建组件的模式：
//   通过类的方式（有状态组件）
//   通过函数的方式（无状态组件）
// 7.React库的核心功能是，让jsx生效
// 8.package.json中的eject指令可以看到未被压缩的全部的package文件
// 9.react：插值表达式 {}
// 10.react中直接改变属性或者变量都不会自动进行响应式渲染，如果想进行响应式渲染，就必须使用state
// 11.ev.persist用来修正ev事件在异步取不到的问题
// 12.在react的事件操作中一定要修正this的指向 让this指定当前的组件 callExpression()、apply()、bind(),
// 当使用箭头函数的时候就不需要再更改this指向了
// 13.react对bind( 指向调用的时候 可以进行性能优化 只在construtor中进行优化 )
// 14.如果react中事件想传递参数的话 需要用箭头函数的方式
// 15.react的属性操作
//     vue: <div :title="title"></div>
//     react: <div title={this.title}></div>


import React from 'react';
import { callExpression } from '@babel/types';

class Header extends React.Component {
    constructor() {
      super();//改变this指向
      this.message = 'hello message';
      setTimeout(() => {
        this.message = 'hello react' //无效的 直接修改属性或者变量
      }, 3000);

      this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return ( 
          // 可以进行占位 不会渲染为真实节点
          <React.Fragment> 
            <div className="box" title={this.message}> { this.message}  { 0 ? 16 : 1005 }</div>
            {/* 面向对象编程 通过this找事件 onClick是封装后的方法*/}
            <button onClick={ this.handleClick}>点击</button> 
            <button onClick={ (ev)=>{this.handleChange(123,ev)}}>123</button> 
          </React.Fragment>
        )
    }
    handleClick(ev) {
      console.log(ev.nativeEvent) //等到原生的event对象

      ev.persist() //在异步中处理一下
      setTimeout(() => {
        console.log(ev.nativeEvent)//在异步中取不到
      }, 2000);

      console.log(this)
    }

    handleChange(num,ev) {
      console.log(num)
      console.log(ev)
    }
}

export default Header;


// 通过函数方式创建
// import React from 'react';

// function Header() {
//   return(
//     <h2>我是头部组件</h2>
//   )
// }

// export default Header;