import React, { Component } from 'react'
import { Results } from './Results'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            location: "",
            searchResults: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:9000/search", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(res => this.setState({searchResults: res}))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.term} name="term" type="text" placeholder="Term"></input>
                <input onChange={this.handleChange} value={this.state.location} name="location" type="text" placeholder="Location"></input>
                <button type="submit">Send</button>
            </form>
            <Results searchData={this.state.searchResults}/>
            </div>
        )
    }
}

export default SearchForm