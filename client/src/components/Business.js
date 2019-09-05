import React, { Component } from 'react'

class Business extends Component {
    constructor(props) {
        super()
        this.state = {
            clicked: false
        }
    }

    // componentDidMount() {
    //     this.setState({...this.state, business: this.props.business})
    // }

    handleClick = (event) => {
        if(this.state.clicked) {
            this.setState({
                clicked: false
            })
        } else {
            this.setState({
                clicked: true
            })
        }
    }

    render() {
        // let businessName;
        // if(this.props.business.name) {
        //     businessName = this.props.business.name
        // }
        return (
            <li onClick={this.handleClick}>
                {this.props.business.name}
            </li>
        )
    }
}

export default Business