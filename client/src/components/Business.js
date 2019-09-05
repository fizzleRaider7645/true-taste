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
        return (
            <li onClick={this.handleClick}>
                Name: {this.props.business.name}<br />
                -{this.props.business.location.address1}
            </li>
        )
    }
}

export default Business