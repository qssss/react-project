import React, { Component, PureComponent } from 'react';

// 虚拟dom由react操作的 
// react-dom则把虚拟dom映射到页面上

class Dom extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Hello vitual dom</h1>
                <div className="container"></div>
            </div>
        )
    }
    componentDidMount() {
        //方式一
        // console.time(1)
        // var container = document.getElementsByClassName('container')[0];
        // for(var i = 0;i < 1000;i++) {
        //     container.innerHTML += '<p>' + i + '</p>'
        // }
        // console.timeEnd(1) //698.ms

        // 方式二
        var container = document.getElementsByClassName('container')[0];
        var str = ''
        console.time(1)
        for(var i = 0;i < 1000;i++) {
            str += '<p>' + i + '</p>'
        }
        container.innerHTML = str
        console.timeEnd(1) //1ms
    }
}

export default Dom