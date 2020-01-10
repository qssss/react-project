// 1.受控组件和非受控组件
//     受控组件：针对表单操作 用state来绑定表单的数据 （模拟v-model）
//     非受控组件：用原生js的方法来绑定表单的数据

import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'hello React!',
            list: [111,222,333,444]
        }
    }
    render() {
        return(
            <React.Fragment>
                <input type="text" value={ this.state.msg } onChange={(ev)=>{this.handleChange(ev)}} onKeyDown={ (ev)=>{ this.handleAdd(ev) }}/>
                <div>{ this.state.msg }</div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={ index }>
                                    { item } 
                                    {/* 注意此处传值 this是绑定在前面的 */}
                                    <button onClick={ this.handleDelete.bind(this,index) }>删除</button> 
                                </li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
    handleChange(ev) {
        this.setState({
            msg: ev.target.value
        })
    }
    handleAdd(ev) {
        if(ev.keyCode === 13) {
            this.setState((prevState)=>{
                return {
                    list: [...prevState.list, this.state.msg],
                    msg: ''
                }
            })
        }
    }
    handleDelete(index) {
        let cloneList = this.state.list.concat();
        cloneList.splice(index,1);

        this.setState({
            list: cloneList
        })
    }
}

export default Header;