import React, { Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import Home from './home.js';
import About from './about.js';
import Topic from './topic.js';

// 前端路由：
//     hash模式：
//         hash + onhashchange 事件
//     history模式：
//         history + pushState() + onpopstate

class ReactRouter extends Component  {
    render() {
        return (
            <Router>
                <div>
                    <NavLink to={{
                        pathname: "/home",
                        search: "?name=1",
                        state: { fromDashboard: true }}} 
                        replace 
                        exact
                        activeClassName="selected"
                        > 首页 </NavLink>
                    <NavLink to="/about"  activeClassName="selected" > 关于 </NavLink>
                    <NavLink to="/topic" innerRef={this.handleChange} activeClassName="selected"> 话题 </NavLink>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/home"  component={Home}></Route>
                        <Redirect to="/topic" from="/*"/>
                    </Switch>
                </div>
            </Router>
        )
    }
    handleChange() {
        console.log('topic')
    }
}

export default ReactRouter;