import React, { Component } from 'react'
import axios from 'axios'

class TestForm extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            location: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:9000/testAPI", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(error => console.error('Error:', error));
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