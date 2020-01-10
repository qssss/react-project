//状态提升:把状态提升到父组件 让兄弟组件之间共享状态 这就是状态提升

import React, { Component } from 'react';

class Money extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rmbVal: 0,
            myVal: 0
        }
        this.changeRMBValue = this.changeRMBValue.bind(this);
        this.changeMYValue = this.changeMYValue.bind(this);
    }
    render() {
        return (
            <div>
                <RMB value = { this.state.rmbVal } changeRMBValue={ this.changeRMBValue }/>
                <MY value = {this.state.myVal } changeMYValue={ this.changeMYValue }/>
            </div>
        )
    }
    changeRMBValue(e) {
        this.setState({
            rmbVal: e.target.value,
            myVal: e.target.value * 6
        })
    }
    changeMYValue(e) {
        this.setState({
            myVal: e.target.value,
            rmbVal: e.target.value / 6
        })
    }
}

class RMB extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                ￥<input type="text" value={ this.props.value } onChange={ this.props.changeRMBValue }/>
            </div>
        )
    }
}

class MY extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                $<input type="text" value={ this.props.value } onChange={ this.props.changeMYValue }/>
            </div>
        )
    }
}

export default Money;