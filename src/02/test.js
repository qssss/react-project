import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '哈哈哈'
        }

        this.getInput = this.getInput.bind(this)
    }   

    render() {
        return(
            <React.Fragment>
                <input type="text"  onChange = { this.setInput.bind(this) } value={ this.getInput() }/>
            </React.Fragment>
        )
    }

    getInput() {
        return this.state.msg
    }

    setInput(ev) {
        this.setState({
            msg:ev.target.value
        })
    }
}

export default Header;