import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusiness } from '../actions/BusinessActions'

class Business extends Component {
    constructor(props) {
        super()
        this.state = {
            clicked: false
        }
    }

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

        this.props.getBusiness(this.props.business.id)
    }

    render() {
        return (
            <li onClick={this.handleClick}>
                <h3>{this.props.business.name}</h3>
                <i>-{this.props.business.location.address1}</i>
            </li>
        )
    }
}

export default connect(null, null)(Business)