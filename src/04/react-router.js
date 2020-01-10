import React, { Component, PureComponent } from 'react';


// 前端路由：
//     hash模式：
//         hash + onhashchange 事件
//     history模式：
//         history + pushState() + onpopstate

class ReactRouter extends Component  {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>hello react-router</h1>
            </div>
        )
    }
}

export default ReactRouter;