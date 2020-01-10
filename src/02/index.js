// 1.vue和react有相似点？还有哪些区别？
//     vue中有指令 v-if v-for
//     react中是没有的

import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        // 无法渲染标签 防止xss攻击 字符串会被xss攻击 但是jsx语法不会
        this.message = '<h2>hello react</h2>'
        this.info = <h2>hello info</h2>
        this.list = [<li key="1">1111</li>,<li key="2">2222</li>]
        this.isShow = true
        this.data = [
            '111',
            '222',
            '333',
        ]
    }
    render() {
        var foo = this.isShow ? 'this.isshow是true' : 'this.isshow是false'
        this.data = this.data.map((item,index)=>{
            return (
                <li key={index}>{item}</li>
            )
        })
        return (
            <div>
                <h2>{ this.message }</h2>
                <h2 dangerouslySetInnerHTML={{__html: this.message}}></h2>
                <div>{this.info}</div>
                <ul>
                    { this.list }
                </ul>
                <div>{foo}</div>
                {/* 第一种写法 */}
                <ul>{this.data}</ul>
                {/* 第二种写法 */}
                <ul>
                    {
                        this.data.map((item,index)=>{
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

export default Header;