import React, { Component, PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
class Animate extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return ( 
            <div> 
                hello Animate
                <button onClick = { this.handleClick }>点击</button>
                <ReactCSSTransitionGroup transitionName="fade" 
                    transitionEnterTimeout = {0} 
                    transitionLeaveTimeout = {0}
                    transitionAppearTimeout = {0}
                    transitionAppear={true}>
                    {this.state.isShow && <div className="animateBox"></div> }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
    handleClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
export default Animate;