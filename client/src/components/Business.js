import React, { Component } from 'react'

class Business extends Component {
    constructor(props) {
        super()
        this.state = {
            clicked: false
        }
    }

    componentDidMount() {
        this.setState({...this.state, business: this.props.business})
    }

    handleClick = (event) => {
        
    }

    render() {
        return (
            <li onClick={this.handleClick}>

            </li>
        )
    }
}

export default Business