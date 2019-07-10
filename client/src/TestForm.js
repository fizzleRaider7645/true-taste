import React, { Component } from 'react'

class TestForm extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            location: ""
        }
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        debugger
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.term} name="term" type="text" placeholder="Term"></input>
                <input onChange={this.handleChange} value={this.state.location} name="location" type="text" placeholder="Location"></input>
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default TestForm