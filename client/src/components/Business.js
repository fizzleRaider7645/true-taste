import React, { Component } from 'react'

class Business extends Component {
    constructor(props) {
        super()
        this.state = {
            clicked: false
        }
    }

    componentDidMount() {
        this.setState({business: this.props.business})
    }

    handleClick = (event) => {
        
    }

    render() {
        return (
            <div onClick={this.handleClick}>

            </div>
        )
    }
}

export default Business