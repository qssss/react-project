import React, { Component} from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return ( 
            <div>
                Home
                <button onClick={this.handleClick.bind(this)}>点击去话题</button>
            </div>
        
        )
    }
    handleClick() {
        console.log(this.props)
        //编程式路由
        this.props.history.push('/topic')
    }
}
export default Home;