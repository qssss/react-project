import React, { Component} from 'react';
class Detail extends Component {
    constructor(props) {
        super(props);
        console.log('eee')
        console.log(this.props)
    }
    render() {
        return(
            <div>
                <div>Detail {this.props.match.params.cid}</div>
            </div>
        )
    }
}
export default Detail;


