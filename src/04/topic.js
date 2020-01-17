import React, { Component } from 'react';
import {  Route, NavLink, Redirect, Switch, withRouter } from "react-router-dom";
import Detail from './detail.js';
class Topic extends Component {
    render() {
        return ( 
            <div> 
                <div>topic</div>
                <NavLink to="/topic/detail/0001" activeClassName="selected"> 话题的详情页0001 </NavLink>
                <NavLink to="/topic/detail/0002" activeClassName="selected"> 话题的详情页0002 </NavLink>
                <NavLink to="/topic/detail/0003" activeClassName="selected"> 话题的详情页0003 </NavLink>
                <Switch>
                    <Route path="/topic/detail/:cid{\d+}" component={Detail}></Route>
                    <Redirect from="/topic" to="/topic/detail/0001"></Redirect>
                </Switch>
                {/* <ChildTopic 
                    history={this.props.history}
                    match={this.props.match}
                    location={this.props.location}
                ></ChildTopic> */}
                <ChildTopicWidth></ChildTopicWidth>
            </div>
        )
    }
}

class ChildTopic extends Component {
    render() {
        //获取不到路由中的三个对象，只有被路由管理得对象才能看到,可以通过父子通信得方式获取数据
        console.log('ChildTopic')
        console.log(this.props)
        return (
            <div>这是一个topic子组件</div>
        )
    }
}
var ChildTopicWidth = withRouter(ChildTopic) //将没有被路由管理的组件也可以获取三大对象
export default Topic;