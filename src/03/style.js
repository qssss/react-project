import React, { Component, PureComponent } from 'react';
import './style.css' //这是一个全局的样式文件 在其他文件中定义相同的类名 也应用上同样的样式
import { StyleSheet,css } from 'aphrodite'
import { Link , Title } from './styled'
// 使用css in js


// 1.aphrodite
const styles = StyleSheet.create({
    firstBox: {
        fontSize: 30
    },
    lastBox: {
        color: 'green'
    }
})

class Style extends Component {
    constructor() {
        super()
        this.spanStyle = {backgroundColor:'#fff',color:'#333'}
    }
    render() {
        return ( 
            <div className="wrap" 
                style={{ 
                    backgroundColor:'#384765',
                    color:'#fff',
                    padding: 20
                }}>
                行内样式
                <p style={ this.spanStyle }>变量定义样式</p>
                <p className = {css(styles.firstBox,styles.lastBox)}>css in js</p>
                <Title>styled</Title>
                <Link>这是一个链接</Link>
            </div>
        )
    }
}

export default Style;